import { getVerses } from '@/features/verses/api'
import { VersesList } from '@/features/verses/components/verses-list'

type Props = {
  search?: string
}

export async function VersesLoader({ search = '' }: Props) {
  const json = await getVerses(search)
  const { results: verses = [] } = json

  if (!json || !verses.length) return <p>No verses found.</p>

  return <VersesList verses={verses} />
}
