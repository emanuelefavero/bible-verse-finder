'use client'

import { Button } from '@/components/ui/button'
import { TITLE } from '@/config/app'
import { useSearchInputStore } from '@/features/search/store/useSearchInputStore'
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
  const { clearSearchInput } = useSearchInputStore()

  const handleClick = () => {
    clearSearchInput()
    router.push('/')
  }

  return (
    <Button
      className={cn('font-bold', className)}
      variant={variant}
      onClick={onClick ?? handleClick}
      {...props}
    >
      {TITLE}
    </Button>
  )
}
