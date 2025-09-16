export async function getVerses(search: string) {
  if (!search) return []

  const res = await fetch(
    `https://bolls.life/v2/find/NKJV?search=${encodeURIComponent(search)}&match_case=false&match_whole=true&limit=128&page=1`,
  )

  if (!res.ok) throw new Error('Failed to fetch verses')
  return res.json()
}
