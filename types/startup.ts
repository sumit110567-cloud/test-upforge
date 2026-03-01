export interface Startup {
  id: string
  name: string
  slug: string
  logo_url: string | null
  description: string | null
  website: string | null
  founders: string | string[]
  founded_year: number | null
  category?: string | null
  is_featured?: boolean
  created_at?: string
  updated_at?: string
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
