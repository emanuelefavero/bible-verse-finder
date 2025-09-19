import type { VersesResponse } from '@/features/verses/types'

export async function getVerses(search: string): Promise<VersesResponse> {
  if (!search) return { results: [], exact_matches: 0, total: 0 }

  const res = await fetch(
    `https://bolls.life/v2/find/NKJV?search=${encodeURIComponent(search)}&match_case=false&match_whole=true&limit=128&page=1`,
  )

  if (!res.ok) throw new Error('Failed to fetch verses')
  return res.json() as Promise<VersesResponse>
}
