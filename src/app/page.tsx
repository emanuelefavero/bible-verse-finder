import { SearchForm } from '@/features/search/search-form'
import { VersesLoader } from '@/features/verses/components/verses-loader'
import { Suspense } from 'react'

type Props = {
  searchParams: Promise<{
    search?: string
  }>
}

export default async function Home({ searchParams }: Props) {
  const { search } = await searchParams

  return (
    <>
      <h1 className='text-3xl font-bold'>Find Bible Verses by Keyword</h1>

      <SearchForm />

      {search && (
        <Suspense fallback={<p>Loading verses...</p>}>
          <VersesLoader search={search} />
        </Suspense>
      )}
    </>
  )
}
