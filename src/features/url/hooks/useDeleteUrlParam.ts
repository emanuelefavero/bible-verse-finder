'use client'

import type { DeleteUrlParamsOptions } from '@/features/url/types'
import { useRouter, useSearchParams } from 'next/navigation'

export function useDeleteUrlParam() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function deleteUrlParam({
    param,
    history = true,
    scroll = false,
  }: DeleteUrlParamsOptions) {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(param)

    const url = params.toString() ? `/?${params.toString()}` : '/'
    if (history) {
      router.replace(url, { scroll })
    } else {
      router.push(url, { scroll })
    }
  }

  return deleteUrlParam
}
