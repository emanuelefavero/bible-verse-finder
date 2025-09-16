import type { Verse } from '@/features/verses/types'

type Props = {
  verse: Verse
}

export function VerseItem({ verse }: Props) {
  return (
    <li key={verse.pk} className='rounded-md border border-foreground/20 p-4'>
      {/* Text */}
      <blockquote className='mb-2 italic'>
        <span aria-hidden='true'>&quot;</span>
        <span dangerouslySetInnerHTML={{ __html: verse.text }} />
        <span aria-hidden='true'>&quot;</span>
      </blockquote>

      {/* Citation */}
      <p className='text-sm text-gray-500'>
        {verse.translation} - Book {verse.book}, Chapter {verse.chapter}, Verse{' '}
        {verse.verse}
      </p>
    </li>
  )
}
