import { getVerses } from '@/lib/bible'

type Props = {
  search?: string
}

export default async function VersesLoader({ search = '' }: Props) {
  const json = await getVerses(search)
  const { results: verses = [] } = json

  if (!json || !verses.length) return <p>No verses found.</p>

  return <code>{JSON.stringify(json, null, 2)}</code>
}
