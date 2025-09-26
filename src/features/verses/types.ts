import type { TranslationName } from '@/features/translation/types'

// VERSES
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

// BOOKS
export type Book = {
  bookid: number
  name: string
  chronorder: number
  chapters: number
}

export type TranslationsBooks = Record<TranslationName, Book[]>
