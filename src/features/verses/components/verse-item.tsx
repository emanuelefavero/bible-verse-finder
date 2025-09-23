import { SpringListItem } from '@/components/ui/spring-list-item'
import type { Verse } from '@/features/verses/types'
import { getBookName } from '@/features/verses/utils/bibleBooks'

type Props = {
  verse: Verse
  index: number
}

export function VerseItem({ verse, index }: Props) {
  const bookName = getBookName(verse.book) || 'Unknown Book'

  return (
    <SpringListItem index={index} className='flex flex-col gap-2 rounded-md'>
      {/* Text */}
      <blockquote className='border-l-2 pl-6 italic'>
        <span aria-hidden='true'>&quot;</span>
        <span dangerouslySetInnerHTML={{ __html: verse.text }} />
        <span aria-hidden='true'>&quot;</span>
      </blockquote>

      {/* Citation */}
      <p className='flex items-center gap-2 text-sm text-muted-foreground'>
        <span className='font-medium'>
          {bookName} {verse.chapter}: {verse.verse}
        </span>
        <span
          className='rounded bg-muted px-1.5 py-0.5 text-xs'
          title='New King James Version'
          aria-label='New King James Version'
        >
          {verse.translation}
        </span>
      </p>
    </SpringListItem>
  )
}
