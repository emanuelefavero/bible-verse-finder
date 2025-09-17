'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function SearchForm() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/?search=${encodeURIComponent(search.trim())}`)
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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <Button type='submit' className='w-full min-w-24 xs:w-fit'>
        Search
      </Button>
    </form>
  )
}
