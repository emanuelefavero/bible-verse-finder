'use client'

import { DEFAULT_TRANSLATION } from '@/config/app'
import { validate } from '@/features/translation/lib/zod'
import { useSetUrlParam } from '@/features/url/hooks/useSetUrlParam'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useTranslation() {
  const searchParams = useSearchParams()
  const urlTranslation = searchParams.get('translation')
  const [selectedTranslation, setSelectedTranslation] = useState(
    urlTranslation || DEFAULT_TRANSLATION,
  )
  const setUrlParam = useSetUrlParam()

  useEffect(() => {
    const savedTranslation = localStorage.getItem('translation')

    // If there's a translation in the URL, save it to localStorage
    if (urlTranslation && validate(urlTranslation).success) {
      setSelectedTranslation(urlTranslation)
      localStorage.setItem('translation', urlTranslation)

      // If there's no translation in the URL but one in localStorage, use that and update the URL
    } else if (savedTranslation && validate(savedTranslation).success) {
      setSelectedTranslation(savedTranslation)
      setUrlParam({
        param: 'translation',
        value: savedTranslation,
        history: false,
      })

      // If neither, use the default translation
    } else {
      setSelectedTranslation(DEFAULT_TRANSLATION)
      localStorage.setItem('translation', DEFAULT_TRANSLATION)
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
