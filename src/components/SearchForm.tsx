'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchForm() {
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
    <form onSubmit={handleSubmit} className='flex flex-wrap gap-1'>
      <input
        type='text'
        name='search'
        placeholder='Search word or phrase'
        className='rounded-full border px-3 py-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button
        type='submit'
        className='cursor-pointer rounded-full bg-foreground px-4 py-1 text-background transition duration-200 active:scale-95'
      >
        Search
      </button>
    </form>
  )
}
