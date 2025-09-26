import translationsBooksJson from '@/features/books/data/translations_books.json'
import type { TranslationName, TranslationsBooks } from '@/features/books/types'

const translationsBooks = translationsBooksJson as TranslationsBooks

export function getBookName({
  translation,
  bookId,
}: {
  translation: TranslationName
  bookId: number
}): string {
  const translationBook = translationsBooks[translation]
  const book = translationBook[bookId - 1]
  if (!book) return 'Unknown Book'

  return book.name
}
