import { redirectWithSearch } from '@/app/actions'

export default function SearchForm() {
  return (
    <form action={redirectWithSearch}>
      <input type='text' name='search' placeholder='Search word or phrase' />
      <button type='submit'>Search</button>
    </form>
  )
}
