import { ModeToggle } from '@/features/theme/mode-toggle'
import { TranslationSelect } from '@/features/translation/components/translation-select'
import languages from '@/features/translation/data/languages.json'
import { Logo } from './logo'

export function Header() {
  return (
    <header className='flex items-center justify-between px-2 py-2'>
      <Logo />
      <div className='flex items-center gap-2 rounded-md'>
        <TranslationSelect languages={languages} />
        <ModeToggle />
      </div>
    </header>
  )
}
