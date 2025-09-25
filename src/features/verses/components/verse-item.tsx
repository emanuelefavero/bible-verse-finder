import { Badge } from '@/components/ui/badge'
import { SpringListItem } from '@/components/ui/spring-list-item'
import type { Verse } from '@/features/verses/types'
import { getBookName } from '@/features/verses/utils/bibleBooks'
import { cleanKJVText } from '@/features/verses/utils/formatText'

type Props = {
  verse: Verse
  index: number
}

export function VerseItem({ verse, index }: Props) {
  const bookName = getBookName(verse.book) || 'Unknown Book'
  const text = cleanKJVText(verse.text, verse.translation) // Clean text if KJV

  return (
    <SpringListItem index={index} className='flex flex-col gap-2 rounded-md'>
      {/* Text */}
      <blockquote className='border-l-2 pl-6 italic'>
        <span aria-hidden='true'>&quot;</span>
        <span dangerouslySetInnerHTML={{ __html: text }} />
        <span aria-hidden='true'>&quot;</span>
      </blockquote>

      {/* Citation */}
      <p className='flex items-center gap-2 text-sm text-muted-foreground'>
        <span className='font-medium'>
          {bookName} {verse.chapter}: {verse.verse}
        </span>
        <Badge
          variant='outline'
          className='text-muted-foreground'
          title='New King James Version'
          aria-label='New King James Version'
        >
          {verse.translation}
        </Badge>
      </p>
    </SpringListItem>
  )
}
