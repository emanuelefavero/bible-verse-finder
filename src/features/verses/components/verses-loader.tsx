import { VersesList } from '@/features/verses/components/verses-list'
import { getVerses } from '@/features/verses/services/api'
import type { VersesResponse } from '@/features/verses/types'

type Props = {
  search?: string
}

export async function VersesLoader({ search = '' }: Props) {
  const json: VersesResponse = await getVerses(search)
  const {
    results: verses = [],
    exact_matches: exactMatches = 0,
    total: versesFound = 0,
  } = json

  if (!json || !verses.length) return <p>No verses found.</p>

  return (
    <>
      <div className='flex gap-4 text-sm text-muted-foreground'>
        <span>Exact matches: {exactMatches}</span>
        <span>Verses found: {versesFound}</span>
      </div>
      <VersesList verses={verses} />
    </>
  )
}
