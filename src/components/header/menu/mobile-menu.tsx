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
import { Menu as MenuIcon } from 'lucide-react'
import { menuItems } from './data/menu-items'

export function MobileMenu() {
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
              {/* Label */}
              {item.label && (
                <DropdownMenuLabel className='font-normal'>
                  {item.label}
                </DropdownMenuLabel>
              )}

              {/* Item */}
              <DropdownMenuItem>{item.component}</DropdownMenuItem>
            </DropdownMenuGroup>

            {/* Separator */}
            {index < menuItems.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
