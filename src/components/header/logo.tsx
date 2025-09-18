'use client'

import { Button } from '@/components/ui/button'
import { useSearchInputStore } from '@/features/search/store/useSearchInputStore'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

type Props = React.ComponentPropsWithRef<typeof Button> & {
  className?: string
}

export function Logo({ className, variant = 'ghost' }: Props) {
  const router = useRouter()
  const { clearSearchInput } = useSearchInputStore()

  const handleClick = () => {
    clearSearchInput()
    router.push('/')
  }

  return (
    <Button
      variant={variant}
      className={cn('font-bold', className)}
      onClick={handleClick}
    >
      Bible Verse Finder
    </Button>
  )
}
