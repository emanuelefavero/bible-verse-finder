import { create } from 'zustand'

type TranslationState = {
  selectedTranslation: string
  setSelectedTranslation: (translation: string) => void
}

export const useTranslationStore = create<TranslationState>((set) => ({
  selectedTranslation: 'KJV',
  setSelectedTranslation: (translation) =>
    set({ selectedTranslation: translation }),
}))
