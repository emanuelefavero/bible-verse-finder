import { SearchForm } from '@/features/search/components/search-form'
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
      <SearchForm />

      {search && (
        <Suspense fallback={<p>Loading verses...</p>}>
          <VersesLoader search={search} />
        </Suspense>
      )}
    </>
  )
}
