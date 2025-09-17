'use client'

import type { Verse } from '@/features/verses/types'
import * as motion from 'motion/react-client'

type Props = {
  verse: Verse
}

export function VerseItem({ verse }: Props) {
  return (
    <motion.li
      key={verse.pk}
      className='flex flex-col gap-2 rounded-md p-4'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.6, // Higher value = more bounce
        stiffness: 600, // Lower = softer spring
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
