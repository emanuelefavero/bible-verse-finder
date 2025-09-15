import Link from 'next/link'

async function getVerses(search: string) {
  if (!search) return []

  const res = await fetch(
    `https://bolls.life/v2/find/NKJV?search=${encodeURIComponent(search)}&match_case=false&match_whole=true&limit=128&page=1`,
  )

  if (!res.ok) throw new Error('Failed to fetch verses')
  return res.json()
}

type Props = {
  searchParams: Promise<{
    search?: string
  }>
}

export default async function Home({ searchParams }: Props) {
  const { search } = await searchParams
  const verses = await getVerses(search || '')

  return (
    <>
      <h1 className='font-bold'>Bible Verse Finder</h1>
      <p>{search}</p>

      {/* TEST */}
      <Link href='/?search=lamb'>
        Search for <code>lamb</code>
      </Link>

      {/* Render verses */}
      <code>{JSON.stringify(verses, null, 2)}</code>
    </>
  )
}
