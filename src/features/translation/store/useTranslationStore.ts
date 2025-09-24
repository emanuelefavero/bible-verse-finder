import { DEFAULT_TRANSLATION } from '@/config/app'
import { create } from 'zustand'

type TranslationState = {
  selectedTranslation: string
  setSelectedTranslation: (translation: string) => void
}

export const useTranslationStore = create<TranslationState>((set) => ({
  selectedTranslation: DEFAULT_TRANSLATION,
  setSelectedTranslation: (translation) =>
    set({ selectedTranslation: translation }),
}))
