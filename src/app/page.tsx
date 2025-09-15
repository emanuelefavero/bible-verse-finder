import { getVerses } from '@/lib/bible'
import Link from 'next/link'

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
