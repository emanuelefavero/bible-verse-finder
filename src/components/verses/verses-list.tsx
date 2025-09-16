import { VerseItem } from '@/components/verses/verse-item'
import type { Verse } from '@/types/verses'

type Props = {
  verses: Verse[]
}

export function VersesList({ verses }: Props) {
  return (
    <ul className='flex max-w-prose flex-wrap gap-4 py-4'>
      {verses.map((verse) => (
        <VerseItem key={verse.pk} verse={verse} />
      ))}
    </ul>
  )
}
