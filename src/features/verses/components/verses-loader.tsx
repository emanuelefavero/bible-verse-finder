import { VersesList } from '@/features/verses/components/verses-list'
import { getVerses } from '@/features/verses/services/api'

type Props = {
  search?: string
}

export async function VersesLoader({ search = '' }: Props) {
  const json = await getVerses(search)
  const { results: verses = [] } = json

  if (!json || !verses.length) return <p>No verses found.</p>

  return <VersesList verses={verses} />
}
