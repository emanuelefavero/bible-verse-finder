import translationsBooksJson from '@/features/verses/data/translations_books.json'

export type TranslationName = keyof typeof translationsBooksJson

export type Translation = {
  short_name: TranslationName
  full_name: string
  updated: number
}

export type Language = {
  language: string
  translations: Translation[]
}
