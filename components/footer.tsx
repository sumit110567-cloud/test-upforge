import Link from "next/link";
import { BadgeCheck, Calculator, FileText } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-200 mt-24 sm:mt-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-20">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-14">

          {/* Identity */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-serif text-2xl tracking-tight">UpForge</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              India’s independent and structured startup registry.
              We document publicly available and founder-submitted data
              in a neutral, accessible format.
            </p>

            <div className="flex gap-4 text-gray-500">
              <BadgeCheck className="w-5 h-5" />
              <Calculator className="w-5 h-5" />
              <FileText className="w-5 h-5" />
            </div>
          </div>

          {/* Registry */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Registry
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/startup" className="hover:text-black transition">
                  Browse Startup
                </Link>
              </li>
              <li>
                <Link href="/valuation" className="hover:text-black transition">
                  Valuation Estimator
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-black transition">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-black transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-black transition">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Standards */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Standards
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/verification" className="hover:text-black transition">
                  Verification Policy
                </Link>
              </li>
              <li>
                <Link href="/editorial" className="hover:text-black transition">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/data-policy" className="hover:text-black transition">
                  Data Policy
                </Link>
              </li>
              <li>
                <Link href="/corrections" className="hover:text-black transition">
                  Corrections
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-black transition">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-black transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-black transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-black transition">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-black transition">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= LEGAL / TRUST SECTION ================= */}
        <div className="border-t border-gray-200 mt-20 pt-10 space-y-8 text-xs text-gray-500">

          <p className="max-w-4xl leading-relaxed">
            UpForge is an informational public registry. Listings are compiled
            from publicly available sources or founder submissions.
            We do not provide investment advice, endorsements, rankings,
            or financial ratings. Information may change over time and
            should be independently verified.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between gap-6">

            <p>
              © {year} UpForge Registry. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-black transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-black transition">
                Terms of Use
              </Link>
              <Link href="/cookies" className="hover:text-black transition">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-black transition">
                Accessibility
              </Link>
            </div>

          </div>

          <p className="text-gray-400">
            Version 1.0 · Independent Startup Documentation Platform
          </p>

        </div>

      </div>
    </footer>
  );
}
