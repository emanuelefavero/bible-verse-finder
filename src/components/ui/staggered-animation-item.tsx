import * as motion from 'motion/react-client'
import { ReactNode } from 'react'

type Props = {
  springConfig?: {
    bounce?: number
    stiffness?: number
    damping?: number
  }
  index: number
  children: ReactNode
  className?: string
}

export function StaggeredAnimationItem({
  children,
  index,
  className = '',
  springConfig = {
    bounce: 0.6, // Higher value = more bounce
    stiffness: 400, // Lower = softer spring
    damping: 20, // Lower = less resistance
  },
}: Props) {
  const initialPosition = index % 2 === 0 ? 300 : -300 // Alternate left/right
  const motionVariants = {
    initial: { opacity: 0, x: initialPosition },
    animate: { opacity: 1, x: 0 },
  }

  return (
    <motion.li
      className={className}
      variants={motionVariants}
      transition={{
        type: 'spring',
        ...springConfig,
      }}
    >
      {children}
    </motion.li>
  )
}
