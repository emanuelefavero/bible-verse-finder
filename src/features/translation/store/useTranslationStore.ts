import { create } from 'zustand'

type TranslationState = {
  selectedTranslation: string
  setSelectedTranslation: (translation: string) => void
}

export const useTranslationStore = create<TranslationState>((set) => ({
  selectedTranslation: 'NKJV',
  setSelectedTranslation: (translation) =>
    set({ selectedTranslation: translation }),
}))
