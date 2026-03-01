// app/admin/login/page.tsx
"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Shield } from "lucide-react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push("/admin")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Invalid credentials")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-[#FCFCFC] text-[#1A1A1A] font-sans antialiased min-h-screen flex items-center justify-center">
      <div className="max-w-[400px] w-full px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center text-xl font-serif">
              UF
            </div>
          </div>
          <h1 className="font-serif text-3xl tracking-tight mb-2">
            Admin Access
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to manage the startup registry
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Shield className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">Secure · Authorized only</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-xs uppercase tracking-wider text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@upforge.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 text-[#1A1A1A] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1A1A1A] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="block text-xs uppercase tracking-wider text-gray-500"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 text-[#1A1A1A] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1A1A1A] transition-colors"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Authorized personnel only · UpForge Registry
        </p>
      </div>
    </div>
  )
}
