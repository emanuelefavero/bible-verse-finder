import { Logo } from './logo'
import { Menu } from './menu/menu'

export function Header() {
  return (
    <header className='flex items-center justify-between px-2 py-2'>
      <Logo />
      <Menu />
    </header>
  )
}
