// app/not-found.tsx
import Link from "next/link"
import { ArrowLeft, Construction, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3EFE5] px-6 text-center">
      {/* Animation Area: You can replace this with a GIF or Lottie */}
      <div className="mb-8 flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-xl">
         {/* Using a Construction Icon as a placeholder for a GIF */}
        <Construction className="h-32 w-32 text-[#0D9488] animate-bounce" />
      </div>

      <h1 className="font-serif text-5xl font-black text-[#0F1A1C] md:text-7xl">
        404
      </h1>
      
      <h2 className="mt-4 text-2xl font-bold text-[#0D9488]">
        Page Under Construction
      </h2>
      
      <p className="mt-4 max-w-md text-gray-600">
        We are currently forging this part of the registry. This page is temporarily 
        inaccessible or does not exist yet.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-full bg-[#0D9488] px-8 py-3 font-bold text-white transition-transform hover:scale-105 active:scale-95"
        >
          <Home size={18} />
          Back to Home
        </Link>
        
        <Link 
          href="/startup" 
          className="flex items-center gap-2 rounded-full border-2 border-[#0D9488] px-8 py-3 font-bold text-[#0D9488] transition-all hover:bg-[#0D9488] hover:text-white"
        >
          <ArrowLeft size={18} />
          Browse Registry
        </Link>
      </div>

      <p className="mt-12 text-sm text-gray-400 italic">
        Redirecting you to the home page in 10 seconds...
      </p>
    </div>
  )
}
