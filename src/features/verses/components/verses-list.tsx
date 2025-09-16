import { VerseItem } from '@/features/verses/components/verse-item'
import type { Verse } from '@/features/verses/types'

type Props = {
  verses: Verse[]
}

export function VersesList({ verses }: Props) {
  return (
    <ul className='flex max-w-prose flex-wrap gap-4'>
      {verses.map((verse) => (
        <VerseItem key={verse.pk} verse={verse} />
      ))}
    </ul>
  )
}
