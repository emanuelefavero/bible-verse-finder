import type { Verse } from '@/features/verses/types'
import * as motion from 'motion/react-client'

type Props = {
  verse: Verse
  index: number
}

export function VerseItem({ verse, index }: Props) {
  const initialPosition = index % 2 === 0 ? 300 : -300 // Alternate left/right
  const motionVariants = {
    initial: { opacity: 0, x: initialPosition },
    animate: { opacity: 1, x: 0 },
  }

  return (
    <motion.li
      key={verse.pk}
      className='flex flex-col gap-2 rounded-md'
      variants={motionVariants}
      transition={{
        type: 'spring',
        bounce: 0.6, // Higher value = more bounce
        stiffness: 400, // Lower = softer spring
        damping: 20, // Lower = less resistance
      }}
    >
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
    </motion.li>
  )
}
