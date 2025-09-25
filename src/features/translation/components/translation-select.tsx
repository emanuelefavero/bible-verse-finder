'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DEFAULT_TRANSLATION } from '@/config/app'
import type { Language } from '@/features/translation/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  languages: Language[]
}

export function TranslationSelect({ languages }: Props) {
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

  return (
    <Select onValueChange={handleChange} value={selectedTranslation}>
      <SelectTrigger className='min-w-[280px]'>
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectGroup key={language.language}>
            <SelectLabel>{language.language}</SelectLabel>
            {language.translations.map((translation) => (
              <SelectItem
                key={translation.short_name}
                value={translation.short_name}
              >
                {translation.full_name}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}
