'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { validate } from '@/features/search/lib/zod'
import { useDeleteUrlParam } from '@/features/url/hooks/useDeleteUrlParam'
import { useSetUrlParam } from '@/features/url/hooks/useSetUrlParam'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function SearchForm() {
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('search') || ''
  const [input, setInput] = useState(searchParam)
  const setUrlParam = useSetUrlParam()
  const deleteUrlParam = useDeleteUrlParam()

  // Update input state when the URL search param changes
  useEffect(() => {
    setInput(searchParam)
  }, [searchParam])

  const validation = validate(input) // Validate input

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (validation.success) {
      setUrlParam({ param: 'search', value: input.trim() })
    } else {
      deleteUrlParam({ param: 'search' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-wrap gap-2 xs:flex-nowrap'
    >
      <Label htmlFor='search' className='sr-only mr-1'>
        Search:
      </Label>
      <Input
        className='xs:min-w-3xs'
        type='text'
        name='search'
        id='search'
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
