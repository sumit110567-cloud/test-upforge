"use client"; // Sabse pehle ye line add karein

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function EdTechStartupsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <nav className="mb-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600">
          ← Back
        </Link>
      </nav>
      
      <header className="mb-12 border-b-4 border-blue-900 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-8 w-8 text-blue-800" />
          <span className="bg-blue-100 text-blue-800 text-xs font-black px-2 py-1 uppercase">Sector Guide</span>
        </div>
        <h1 className="text-6xl font-black text-blue-900">EdTech Startups India</h1>
        <p className="mt-4 text-xl text-slate-600">The most comprehensive directory of Indian EdTech brands in 2026.</p>
      </header>

      <main className="max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-2">
          {["Byju's", "Unacademy", "PhysicsWallah", "UpGrad"].map((brand) => (
            <div key={brand} className="border-4 border-blue-900 bg-white p-8 shadow-[10px_10px_0px_0px_rgba(30,58,138,1)]">
              <h2 className="text-3xl font-black text-blue-900 mb-2">{brand}</h2>
              <p className="text-slate-500 leading-relaxed mb-6">Revolutionizing the way India learns through technology and expert-led content.</p>
              <Link href="/submit" className="inline-flex items-center gap-2 text-blue-700 font-black hover:gap-4 transition-all">
                Verify Startup <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
