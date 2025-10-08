'use client'

import { Spinner } from '@/components/icons/spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { validate } from '@/features/search/lib/zod'
import { useDeleteUrlParam } from '@/features/url/hooks/useDeleteUrlParam'
import { useSetUrlParam } from '@/features/url/hooks/useSetUrlParam'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState, useTransition } from 'react'

export function SearchForm() {
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('search') || ''
  const [input, setInput] = useState(searchParam)
  const setUrlParam = useSetUrlParam()
  const deleteUrlParam = useDeleteUrlParam()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()

  // Focus the input element when the component mounts
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Update input state when the URL search param changes
  useEffect(() => {
    setInput(searchParam)
  }, [searchParam])

  const validation = validate(input) // Validate input

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (validation.success) {
      startTransition(() => {
        setUrlParam({ param: 'search', value: input.trim() })
      })
    } else {
      startTransition(() => {
        deleteUrlParam({ param: 'search' })
      })
    }
  }

  function handleClear() {
    setInput('')
    startTransition(() => {
      deleteUrlParam({ param: 'search' })
    })
    inputRef.current?.focus()
  }

  function inputAlreadySearched() {
    return input.trim().toLowerCase() === searchParam.trim().toLowerCase()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-wrap gap-2 xs:flex-nowrap'
    >
      <Label htmlFor='search' className='sr-only mr-1'>
        Search:
      </Label>
      <div className='relative'>
        <Input
          ref={inputRef}
          className={cn('xs:min-w-3xs', input && 'pr-12')}
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
        {input && (
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute top-1/2 right-1 -translate-y-1/2 border-l-2 border-transparent opacity-50 hover:bg-transparent hover:opacity-100 focus:opacity-100 focus-visible:border-l-2 focus-visible:border-input focus-visible:ring-0 dark:hover:bg-transparent'
            onClick={handleClear}
          >
            <X className='h-4 w-4' />
            <span className='sr-only'>Clear</span>
          </Button>
        )}
      </div>

      <Button
        type='submit'
        className='w-full min-w-24 xs:w-fit'
        disabled={!validation.success || isPending || inputAlreadySearched()}
      >
        {isPending ? (
          <Spinner className='mr-2 inline-block h-4 w-4' />
        ) : (
          'Search'
        )}
      </Button>
    </form>
  )
}
