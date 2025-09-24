import { VersesList } from '@/features/verses/components/verses-list'
import { getVerses } from '@/features/verses/services/api'
import type { VersesResponse } from '@/features/verses/types'
import { VersesStats } from './verses-stats'

type Props = {
  search?: string
  translation?: string
}

export async function VersesLoader({
  search = '',
  translation = 'NKJV',
}: Props) {
  const json: VersesResponse = await getVerses(search, translation)
  const {
    results: verses = [],
    exact_matches: exactMatches = 0,
    total: versesFound = 0,
  } = json

  if (!json || !verses.length) return <p>No verses found.</p>

  return (
    <>
      <VersesStats exactMatches={exactMatches} versesFound={versesFound} />
      <VersesList verses={verses} />
    </>
  )
}
