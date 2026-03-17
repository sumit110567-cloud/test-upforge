// types/startup.ts
export interface Startup {
  id: string
  name: string
  slug: string
  description?: string | null
  logo_url?: string | null
  website?: string | null
  founders?: string | null
  founded_year?: number | null
  category?: string | null
  city?: string | null
  status: "pending" | "approved" | "rejected"
  is_featured?: boolean
  is_sponsored?: boolean
  linkedin_url?: string | null
  twitter_url?: string | null
  instagram_url?: string | null
  created_at?: string
  updated_at?: string | null
}

export interface StartupDirectoryItem {
  id: string
  name: string
  slug: string
  logo_url: string | null
  description: string | null
  founded_year?: number | null
  category?: string | null
}
