'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { validate } from '@/features/search/lib/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('search') || ''
  const [input, setInput] = useState(searchParam)

  // Update input state when the URL search param changes
  useEffect(() => {
    setInput(searchParam)
  }, [searchParam])

  const validation = validate(input)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Get current URL search params
    const params = new URLSearchParams(searchParams.toString())

    // Update URL search param
    if (validation.success) params.set('search', input)
    else params.delete('search')

    // Keep other existing params if present and navigate
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
        disabled={!validation.success}
      >
        Search
      </Button>
    </form>
  )
}
