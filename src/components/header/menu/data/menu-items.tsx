import { ModeToggle } from '@/features/theme/mode-toggle'
import { TranslationSelect } from '@/features/translation/components/translation-select'
import languages from '@/features/translation/data/languages.json'
import type { Language } from '@/features/translation/types'

export const menuItems = [
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
