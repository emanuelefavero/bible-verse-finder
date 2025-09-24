'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('search') || ''
  const [input, setInput] = useState(searchParam)

  // Keep input in sync with URL param
  useEffect(() => {
    setInput(searchParam)
  }, [searchParam])

  const trimmed = input.trim()
  const isValidSearch = trimmed.length >= 3 && trimmed.length <= 200
  const isSearchEmpty = trimmed.length === 0

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())

    if (isValidSearch && !isSearchEmpty) {
      params.set('search', input)
    } else {
      params.delete('search')
    }

    // Keep other existing params if present
    const url = params.toString() ? `/?${params.toString()}` : '/'
    router.push(url)
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
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
