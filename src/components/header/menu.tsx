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

function DesktopMenu() {
  return (
    <nav className='flex items-center gap-2 rounded-md' aria-label='Menu'>
      <TranslationSelect languages={languages as Language[]} />
      <ModeToggle />
    </nav>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      {/* Mobile menu button */}
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menu</Button>
      </DropdownMenuTrigger>

      {/* Mobile menu content */}
      <DropdownMenuContent className='relative right-2 w-fit' align='start'>
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        {/* Translation Select */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <TranslationSelect languages={languages as Language[]} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* Mode Toggle */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ModeToggle />
          </DropdownMenuItem>
        </DropdownMenuGroup>
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
