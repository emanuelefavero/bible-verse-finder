import type { TranslationName } from '@/features/books/types'

export type Verse = {
  pk: number
  translation: TranslationName
  book: number
  chapter: number
  verse: number
  text: string
}

/**
 * API response when fetching verses
 * @see docs/bolls-bible-api-example.md (Example)
 * @see https://bolls.life/api/ (Documentation)
 */

export type VersesResponse = {
  results: Verse[]
  exact_matches: number
  total: number
}
