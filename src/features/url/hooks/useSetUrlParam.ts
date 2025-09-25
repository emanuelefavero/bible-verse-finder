'use client'

import type { SetUrlParamsOptions } from '@/features/url/types'
import { useRouter, useSearchParams } from 'next/navigation'

// TODO add params in current route instead of assuming home page, add optional route param that if present uses that instead of /

export function useSetUrlParam() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function setUrlParam({
    param,
    value,
    history = true,
    scroll = false,
  }: SetUrlParamsOptions) {
    const params = new URLSearchParams(searchParams.toString())
    params.set(param, value) // Update the specified param

    // Keep other existing params if present
    const url = params.toString() ? `/?${params.toString()}` : '/'

    if (history) {
      // Update URL without adding a new entry to the browser history
      router.replace(url, { scroll })
    } else {
      // Update URL and add a new entry to the browser history
      router.push(url, { scroll })
    }
  }

  return setUrlParam
}
