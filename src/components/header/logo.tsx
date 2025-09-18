import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = Omit<React.ComponentPropsWithRef<typeof Link>, 'href'> & {
  className?: string
}

export function Logo({ className, ...props }: Props) {
  return (
    <Link href='/' className={cn('font-bold', className)} {...props}>
      Bible Verse Finder
    </Link>
  )
}
