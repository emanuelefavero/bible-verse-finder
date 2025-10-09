import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ModeToggle } from '@/features/theme/mode-toggle'
import { TranslationSelect } from '@/features/translation/components/translation-select'
import languages from '@/features/translation/data/languages.json'
import type { Language } from '@/features/translation/types'
import { Menu as MenuIcon } from 'lucide-react'

const menuItems = [
  {
    id: 'translation',
    label: 'Translation',
    component: <TranslationSelect languages={languages as Language[]} />,
  },
  {
    id: 'theme',
    component: <ModeToggle />,
  },
]

function DesktopMenu() {
  return (
    <nav className='flex items-center gap-2 rounded-md' aria-label='Menu'>
      {menuItems.map((item) => (
        <div key={item.id}>{item.component}</div>
      ))}
    </nav>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <span className='sr-only'>Open menu</span>
          <MenuIcon className='h-5 w-5' />
        </Button>
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent className='relative right-2 w-fit' align='start'>
        <DropdownMenuLabel className='font-bold'>Settings</DropdownMenuLabel>

        {/* Items */}
        {menuItems.map((item, index) => (
          <div key={item.id}>
            <DropdownMenuGroup key={item.id}>
              {item.label && (
                <DropdownMenuLabel className='font-normal'>
                  {item.label}
                </DropdownMenuLabel>
              )}
              <DropdownMenuItem>{item.component}</DropdownMenuItem>
            </DropdownMenuGroup>
            {index < menuItems.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Menu() {
  return (
    <>
      <div className='hidden 2xs:flex'>
        <DesktopMenu />
      </div>
      <div className='2xs:hidden'>
        <MobileMenu />
      </div>
    </>
  )
}
