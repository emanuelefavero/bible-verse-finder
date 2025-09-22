import { StaggeredAnimationContainer } from '@/components/ui/staggered-animation-container'
import { VerseItem } from '@/features/verses/components/verse-item'
import type { Verse } from '@/features/verses/types'

type Props = {
  verses: Verse[]
}

export function VersesList({ verses }: Props) {
  return (
    <StaggeredAnimationContainer className='flex flex-wrap gap-12 overflow-x-hidden'>
      {verses.map((verse, index) => (
        <VerseItem key={verse.pk} verse={verse} index={index} />
      ))}
    </StaggeredAnimationContainer>
  )
}
