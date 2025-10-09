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

export function Menu() {
  return (
    <>
      <DesktopMenu />
    </>
  )
}
