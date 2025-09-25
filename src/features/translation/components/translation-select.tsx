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
      <SelectTrigger>
        <SelectValue
          placeholder='Select version'
          className='hidden 2xs:inline-block xs:w-[175px] sm:w-fit sm:whitespace-normal'
        />
        <SelectValue placeholder='Version' className='xs:hidden' />
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
                <span className='hidden sm:inline-block'>
                  {translation.full_name}
                </span>
                <span
                  className='sm:hidden'
                  title={translation.full_name}
                  aria-label={translation.full_name}
                >
                  {translation.short_name}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}
