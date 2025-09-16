import type { Verse } from '@/types/verses'

type Props = {
  verse: Verse
}

export function VerseItem({ verse }: Props) {
  return (
    <li key={verse.pk} className='rounded-md border border-foreground/20 p-4'>
      <p className='mb-2 italic'>&quot;{verse.text}&quot;</p>
      <p className='text-sm text-gray-500'>
        {verse.translation} - Book {verse.book}, Chapter {verse.chapter}, Verse{' '}
        {verse.verse}
      </p>
    </li>
  )
}
