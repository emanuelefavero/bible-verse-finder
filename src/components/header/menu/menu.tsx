import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'

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
