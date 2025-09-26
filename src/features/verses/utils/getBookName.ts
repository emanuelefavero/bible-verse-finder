import type { TranslationName } from '@/features/translation/types'
import translationsBooksJson from '@/features/verses/data/translations_books.json'
import type { TranslationsBooks } from '@/features/verses/types'

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
