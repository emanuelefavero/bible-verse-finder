import SearchForm from '@/components/SearchForm'
import { getVerses } from '@/lib/bible'

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

      <SearchForm />

      {/* Render verses */}
      <p>{search}</p>
      <code>{JSON.stringify(verses, null, 2)}</code>
    </>
  )
}
