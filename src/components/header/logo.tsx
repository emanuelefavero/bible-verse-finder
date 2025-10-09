'use client'

import { Button } from '@/components/ui/button'
import { TITLE } from '@/config/app'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

type Props = React.ComponentPropsWithRef<typeof Button> & {
  className?: string
}

export function Logo({
  className,
  variant = 'ghost',
  onClick,
  ...props
}: Props) {
  const router = useRouter()

  const handleClick = () => router.push('/')

  return (
    <Button
      className={cn('font-bold', className)}
      variant={variant}
      onClick={onClick ?? handleClick}
      {...props}
    >
      <span className='hidden 4xs:inline-block'>{TITLE}</span>
      <span
        className='inline-block 4xs:hidden'
        title={TITLE}
        aria-label={TITLE}
      >
        BVF
      </span>
    </Button>
  )
}
