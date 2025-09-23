import { create } from 'zustand'

type SearchInputState = {
  searchInput: string
  setSearchInput: (searchInput: string) => void
  clearSearchInput: () => void
  isValidSearch: boolean
  isSearchEmpty: boolean
}

export const useSearchInputStore = create<SearchInputState>((set) => ({
  searchInput: '',
  setSearchInput: (searchInput) => {
    const trimmed = searchInput.trim()
    set({
      searchInput,
      isValidSearch: trimmed.length >= 3 && trimmed.length <= 200,
      isSearchEmpty: trimmed.length === 0,
    })
  },
  clearSearchInput: () =>
    set({
      searchInput: '',
      isValidSearch: false,
      isSearchEmpty: true,
    }),
  isValidSearch: false,
  isSearchEmpty: true,
}))
