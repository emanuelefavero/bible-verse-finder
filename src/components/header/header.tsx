import { ModeToggle } from '@/features/theme/mode-toggle'
import { Logo } from './logo'

export function Header() {
  return (
    <header className='flex items-center justify-between px-2 py-2'>
      <Logo />
      <ModeToggle />
    </header>
  )
}
