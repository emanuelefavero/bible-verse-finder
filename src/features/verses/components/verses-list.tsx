import { VerseItem } from '@/features/verses/components/verse-item'
import type { Verse } from '@/features/verses/types'
import * as motion from 'motion/react-client'

type Props = {
  verses: Verse[]
}

export function VersesList({ verses }: Props) {
  const motionVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.ul
      variants={motionVariants}
      initial='initial'
      animate='animate'
      className='flex max-w-prose flex-wrap gap-4 overflow-x-hidden'
    >
      {verses.map((verse, index) => (
        <VerseItem key={verse.pk} verse={verse} index={index} />
      ))}
    </motion.ul>
  )
}
