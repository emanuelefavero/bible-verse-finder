import translationsBooksJson from '@/features/books/data/translations_books.json'

export type TranslationName = keyof typeof translationsBooksJson

export type Book = {
  bookid: number
  name: string
  chronorder: number
  chapters: number
}

export type TranslationsBooks = Record<TranslationName, Book[]>
