import { menuItems } from './data/menu-items'

export function DesktopMenu() {
  return (
    <nav className='flex items-center gap-2 rounded-md' aria-label='Menu'>
      {menuItems.map((item) => (
        <div key={item.id}>{item.component}</div>
      ))}
    </nav>
  )
}
