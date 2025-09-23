import * as motion from 'motion/react-client'
import type { ComponentPropsWithRef, ReactNode } from 'react'

type Props = ComponentPropsWithRef<typeof motion.li> & {
  springConfig?: {
    bounce?: number
    stiffness?: number
    damping?: number
  }
  index: number
  children: ReactNode
  className?: string
}

export function SpringListItem({
  springConfig = {
    bounce: 0.6, // Higher value = more bounce
    stiffness: 400, // Lower = softer spring
    damping: 20, // Lower = less resistance
  },
  index,
  children,
  className = '',
  ...props
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
      {...props}
    >
      {children}
    </motion.li>
  )
}
