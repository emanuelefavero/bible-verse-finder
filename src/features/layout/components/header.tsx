import { ModeToggle } from '@/features/theme/components/mode-toggle'

export function Header() {
  return (
    <header className='mb-8 flex items-center justify-between px-2 py-2'>
      <h1 className='font-bold'>Bible Verse Finder</h1>
      <ModeToggle />
    </header>
  )
}
