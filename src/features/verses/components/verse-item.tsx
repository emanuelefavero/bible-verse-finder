import { SpringListItem } from '@/components/ui/spring-list-item'
import type { Verse } from '@/features/verses/types'

type Props = {
  verse: Verse
  index: number
}

export function VerseItem({ verse, index }: Props) {
  return (
    <SpringListItem index={index} className='flex flex-col gap-2 rounded-md'>
      {/* Text */}
      <blockquote className='border-l-2 pl-6 italic'>
        <span aria-hidden='true'>&quot;</span>
        <span dangerouslySetInnerHTML={{ __html: verse.text }} />
        <span aria-hidden='true'>&quot;</span>
      </blockquote>

      {/* Citation */}
      <p className='text-sm text-muted-foreground'>
        {verse.translation} - Book {verse.book}, Chapter {verse.chapter}, Verse{' '}
        {verse.verse}
      </p>
    </SpringListItem>
  )
}
