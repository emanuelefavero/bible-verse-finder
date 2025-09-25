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
    // Helpers
    function saveTranslation(translation: string) {
      setSelectedTranslation(translation)
      localStorage.setItem('translation', translation)
    }

    function setTranslationUrl(translation: string) {
      setSelectedTranslation(translation)
      const params = new URLSearchParams(searchParams.toString())
      params.set('translation', translation)
      router.replace('?' + params.toString(), { scroll: false })
    }
    // ---

    const savedTranslation = localStorage.getItem('translation')

    // Sync state and storage with URL param if present
    if (urlTranslation) {
      saveTranslation(urlTranslation)
    } else if (savedTranslation) {
      setTranslationUrl(savedTranslation)
    } else {
      saveTranslation(DEFAULT_TRANSLATION)
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
