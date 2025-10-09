'use client'

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
import { cn } from '@/lib/utils'
import { Menu as MenuIcon, X } from 'lucide-react'
import { useState } from 'react'
import { menuItems } from './data/menu-items'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className={cn(open && 'text-error-foreground')}
        >
          <span className='sr-only'>{open ? 'Close' : 'Open'} menu</span>
          {open ? <X /> : <MenuIcon />}
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
