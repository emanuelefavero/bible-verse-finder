import { SpringList } from '@/components/ui/spring-list'
import { VerseItem } from '@/features/verses/components/verse-item'
import type { Verse } from '@/features/verses/types'

type Props = {
  verses: Verse[]
}

export function VersesList({ verses }: Props) {
  return (
    <SpringList className='flex flex-wrap gap-12 overflow-x-hidden'>
      {verses.map((verse, index) => (
        <VerseItem key={verse.pk} verse={verse} index={index} />
      ))}
    </SpringList>
  )
}
