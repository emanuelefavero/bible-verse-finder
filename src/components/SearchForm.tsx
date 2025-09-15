import { redirectWithSearch } from '@/app/actions'

export default function SearchForm() {
  return (
    <form action={redirectWithSearch} className='flex flex-wrap gap-1'>
      <input
        type='text'
        name='search'
        placeholder='Search word or phrase'
        className='rounded-full border px-3 py-1'
        required
      />
      <button
        type='submit'
        className='cursor-pointer rounded-full bg-foreground px-4 py-1 text-background transition duration-200 active:scale-95'
      >
        Search
      </button>
    </form>
  )
}
