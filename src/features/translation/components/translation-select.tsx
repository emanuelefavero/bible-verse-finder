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
import { useTranslation } from '@/features/translation/hooks/useTranslation'
import type { Language } from '@/features/translation/types'

type Props = {
  languages: Language[]
}

export function TranslationSelect({ languages }: Props) {
  const { selectedTranslation, handleChange } = useTranslation()

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
