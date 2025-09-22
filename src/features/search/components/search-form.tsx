'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearchInputStore } from '@/features/search/store/useSearchInputStore'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const { searchInput, setSearchInput, isValidSearch, isSearchEmpty } =
    useSearchInputStore()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (searchInput.trim()) {
      router.push(`/?search=${encodeURIComponent(searchInput.trim())}`)
    } else {
      router.push('/')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-wrap gap-2 xs:flex-nowrap'
    >
      <Input
        className='xs:min-w-3xs'
        type='text'
        name='search'
        placeholder='Search word or phrase'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
        minLength={3}
        maxLength={200}
      />
      <Button
        type='submit'
        className='w-full min-w-24 xs:w-fit'
        disabled={!isValidSearch || isSearchEmpty}
      >
        Search
      </Button>
    </form>
  )
}
