import SearchForm from '@/components/SearchForm'
import { getVerses } from '@/lib/bible'
import { Suspense } from 'react'

type Props = {
  searchParams: Promise<{
    search?: string
  }>
}

export default async function Home({ searchParams }: Props) {
  const { search } = await searchParams
  const json = await getVerses(search || '')

  // TODO add exact_matches: exactMatches = 0, total = 0,
  const { results: verses = [] } = json

  return (
    <>
      <h1 className='font-bold'>Bible Verse Finder</h1>

      <SearchForm />

      {/* Render verses */}
      {search && verses.length > 0 && (
        <Suspense fallback={<p>Loading verses...</p>}>
          <code>{JSON.stringify(json, null, 2)}</code>
        </Suspense>
      )}
    </>
  )
}
