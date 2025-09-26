import type { TranslationName } from '@/features/books/types'

export type Translation = {
  short_name: TranslationName
  full_name: string
  updated: number
}

export type Language = {
  language: string
  translations: Translation[]
}
