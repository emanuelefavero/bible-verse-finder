'use client'

import { DEFAULT_TRANSLATION } from '@/config/app'
import { validate } from '@/features/translation/lib/zod'
import { useSetUrlParam } from '@/features/url/hooks/useSetUrlParam'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Helper to get initial translation value
function getInitialTranslation(urlTranslation: string | null): string {
  // Prioritize URL translation if valid
  if (urlTranslation && validate(urlTranslation).success) {
    return urlTranslation
  }

  // Check localStorage
  const savedTranslation = localStorage.getItem('translation')
  if (savedTranslation && validate(savedTranslation).success) {
    return savedTranslation
  }

  // Fall back to default
  return DEFAULT_TRANSLATION
}

export function useTranslation() {
  const searchParams = useSearchParams()
  const urlTranslation = searchParams.get('translation')
  const [selectedTranslation, setSelectedTranslation] = useState(() =>
    getInitialTranslation(urlTranslation),
  )
  const setUrlParam = useSetUrlParam()

  // Sync to localStorage when URL translation changes
  useEffect(() => {
    if (urlTranslation && validate(urlTranslation).success) {
      localStorage.setItem('translation', urlTranslation)
    }
  }, [urlTranslation])

  // Sync URL when there's no URL param but localStorage has a value
  useEffect(() => {
    if (!urlTranslation) {
      const savedTranslation = localStorage.getItem('translation')
      if (savedTranslation && validate(savedTranslation).success) {
        setUrlParam({
          param: 'translation',
          value: savedTranslation,
          history: false,
        })
      } else {
        // No saved translation, ensure localStorage has default
        localStorage.setItem('translation', DEFAULT_TRANSLATION)
      }
    }
  }, [urlTranslation, setUrlParam])

  // Update the URL and localStorage with the selected translation
  function handleChange(value: string) {
    if (!validate(value).success) return

    setSelectedTranslation(value)
    localStorage.setItem('translation', value)
    setUrlParam({ param: 'translation', value, history: false })
  }

  return { selectedTranslation, handleChange }
}
