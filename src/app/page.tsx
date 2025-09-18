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
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
        Find Bible Verses by Keyword
      </h1>

      <SearchForm />

      {search && (
        <Suspense fallback={<p>Loading verses...</p>}>
          <VersesLoader search={search} />
        </Suspense>
      )}
    </>
  )
}
