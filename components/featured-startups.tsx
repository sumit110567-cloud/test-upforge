// components/featured-startups.tsx
// Server Component — reads domain context from middleware header
// and passes it to StartupCard so links stay on the current domain.

import { createClient } from "@/lib/supabase/server"
// Fixed this import path:
import { getDomainContext } from "@/lib/domain.server" 
import type { Startup } from "@/types/startup"
import { StartupCard } from "@/components/startup-card"
import { Award } from "lucide-react"

export async function FeaturedStartups() {
  const [supabase, domain] = await Promise.all([
    createClient(),
    getDomainContext(),
  ])

  const { data: startups } = await supabase
    .from("startups")
    .select("*")
    .eq("is_featured", true)
    .order("created_at", { ascending: false })

  if (!startups || startups.length === 0) return null

  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
            <Award className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Top Startups
          </h2>
        </div>
        <p className="mt-2 text-muted-foreground">
          {"Recognized leaders in India's startup ecosystem"}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(startups as Startup[]).map((startup) => (
            // domain prop ensures card links never cross domains accidentally
            <StartupCard key={startup.id} startup={startup} featured domain={domain} />
          ))}
        </div>
      </div>
    </section>
  )
}
