import * as motion from 'motion/react-client'
import { ReactNode } from 'react'

type Props = {
  staggerDelay?: number
  children: ReactNode
  className?: string
}

export function SpringList({
  staggerDelay = 0.1,
  children,
  className = '',
}: Props) {
  const motionVariants = {
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.ul
      variants={motionVariants}
      initial='initial'
      animate='animate'
      className={className}
    >
      {children}
    </motion.ul>
  )
}
