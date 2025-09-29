import type { TranslationName } from '@/features/books/types'
import languages from '@/features/translation/data/languages.json'
import type { Language } from '@/features/translation/types'

/**
 * Build a map of translation short name -> full name
 *
 * The project ships a `languages.json` file that groups translations by
 * language. Each translation entry contains `short_name` (e.g. "NKJV") and
 * `full_name` (e.g. "New King James Version, 1982"). This utility reduces that
 * structure into an object for quick access at runtime.
 *
 * @example
 * const translationFullNameMap = { 'KJV': 'King James Version, 1769', ... }
 * // translationFullNameMap['KJV'] => 'King James Version, 1769'
 */

const translationFullNameMap = (languages as Language[]).reduce(
  (accumulator, language) => {
    language.translations.forEach(({ short_name, full_name }) => {
      accumulator[short_name as TranslationName] = full_name
    })
    return accumulator
  },
  {} as Record<TranslationName, string>,
)

/**
 * Return the human-friendly full name from a translation short code
 *
 * @example
 * getTranslationFullName('KJV') // 'King James Version, 1769'
 */

export function getTranslationFullName(translation: TranslationName) {
  return translationFullNameMap[translation]
}
