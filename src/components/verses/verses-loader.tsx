import { VersesList } from '@/components/verses/verses-list'
import { getVerses } from '@/lib/bible'

type Props = {
  search?: string
}

export async function VersesLoader({ search = '' }: Props) {
  const json = await getVerses(search)
  const { results: verses = [] } = json

  if (!json || !verses.length) return <p>No verses found.</p>

  return <VersesList verses={verses} />
}
