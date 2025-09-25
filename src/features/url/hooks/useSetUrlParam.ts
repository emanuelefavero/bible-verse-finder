'use client'

import type { SetUrlParamsOptions } from '@/features/url/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useSetUrlParam() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  function setUrlParam({
    param,
    value,
    history = true,
    scroll = false,
    route,
  }: SetUrlParamsOptions) {
    const params = new URLSearchParams(searchParams.toString())
    params.set(param, value) // Update the specified param

    // Keep other existing params if present
    const currentRoute = route || pathname
    const url = params.toString()
      ? `${currentRoute}?${params.toString()}`
      : currentRoute

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
