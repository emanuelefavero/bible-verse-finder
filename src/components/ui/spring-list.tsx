import * as motion from 'motion/react-client'
import type { ComponentPropsWithRef, ReactNode } from 'react'

type Props = ComponentPropsWithRef<typeof motion.ul> & {
  staggerDelay?: number
  children: ReactNode
  className?: string
}

export function SpringList({
  staggerDelay = 0.1,
  children,
  className = '',
  ...props
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
      {...props}
    >
      {children}
    </motion.ul>
  )
}
