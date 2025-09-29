import type { TranslationName } from '@/features/books/types'
import languages from '@/features/translation/data/languages.json'
import type { Language } from '@/features/translation/types'

const translationFullNameMap = (languages as Language[]).reduce(
  (acc, language) => {
    language.translations.forEach(({ short_name, full_name }) => {
      acc[short_name as TranslationName] = full_name
    })
    return acc
  },
  {} as Record<TranslationName, string>,
)

export function getTranslationFullName(translation: TranslationName) {
  return translationFullNameMap[translation]
}
