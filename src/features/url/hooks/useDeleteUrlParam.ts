'use client'

import type { DeleteUrlParamsOptions } from '@/features/url/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useDeleteUrlParam() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  function deleteUrlParam({
    param,
    history = true,
    scroll = false,
    route,
  }: DeleteUrlParamsOptions) {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(param)

    const currentRoute = route || pathname
    const url = params.toString()
      ? `${currentRoute}?${params.toString()}`
      : currentRoute
    if (history) {
      router.replace(url, { scroll })
    } else {
      router.push(url, { scroll })
    }
  }

  return deleteUrlParam
}
