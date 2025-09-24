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

type Props = {
  languages: Language[]
}

export function TranslationSelect({ languages }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedTranslation =
    searchParams.get('translation') || DEFAULT_TRANSLATION

  // Update the URL with the selected translation
  function handleChange(value: string) {
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
