import type { Verse } from '@/features/verses/types'

type Props = {
  verse: Verse
}

export function VerseItem({ verse }: Props) {
  return (
    <li key={verse.pk} className='flex flex-col gap-2 rounded-md p-4'>
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
    </li>
  )
}
