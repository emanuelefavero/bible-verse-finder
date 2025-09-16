import { ModeToggle } from '@/features/theme/components/mode-toggle'

export function Header() {
  return (
    <header className='flex items-center justify-between px-2 py-2'>
      <span className='font-bold'>Bible Verse Finder</span>
      <ModeToggle />
    </header>
  )
}
