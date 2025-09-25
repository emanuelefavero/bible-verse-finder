'use client'

import { DEFAULT_TRANSLATION } from '@/config/app'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useTranslation() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlTranslation = searchParams.get('translation')
  const [selectedTranslation, setSelectedTranslation] = useState(
    urlTranslation || DEFAULT_TRANSLATION,
  )

  useEffect(() => {
    const savedTranslation = localStorage.getItem('translation')

    // If there's a translation in the URL, use it and save to localStorage
    if (urlTranslation) {
      setSelectedTranslation(urlTranslation)
      localStorage.setItem('translation', urlTranslation)

      // If no URL param but there's a saved translation in localStorage, use it
    } else if (savedTranslation) {
      setSelectedTranslation(savedTranslation)

      // Update URL to reflect the saved translation
      const params = new URLSearchParams(searchParams.toString())
      params.set('translation', savedTranslation)
      router.replace('?' + params.toString(), { scroll: false })

      // If no URL param and no saved translation, use default and save it
    } else {
      setSelectedTranslation(DEFAULT_TRANSLATION)
      localStorage.setItem('translation', DEFAULT_TRANSLATION)
    }
  }, [urlTranslation, searchParams, router])

  // Update the URL and localStorage with the selected translation
  function handleChange(value: string) {
    setSelectedTranslation(value)
    localStorage.setItem('translation', value)

    const params = new URLSearchParams(searchParams.toString())
    params.set('translation', value)
    router.replace('?' + params.toString(), { scroll: false })
  }

  return { selectedTranslation, handleChange }
}
