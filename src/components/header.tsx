import { ModeToggle } from '@/features/theme/mode-toggle'
import Link from 'next/link'

export function Header() {
  return (
    <header className='flex items-center justify-between px-2 py-2'>
      <Link href='/' className='font-bold'>
        Bible Verse Finder
      </Link>
      <ModeToggle />
    </header>
  )
}
