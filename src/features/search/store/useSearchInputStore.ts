import { create } from 'zustand'

interface SearchInputState {
  searchInput: string
  setSearchInput: (searchInput: string) => void
  clearSearchInput: () => void
}

export const useSearchInputStore = create<SearchInputState>((set) => ({
  searchInput: '',
  setSearchInput: (searchInput) => set({ searchInput }),
  clearSearchInput: () => set({ searchInput: '' }),
}))
