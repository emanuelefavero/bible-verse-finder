'use server'

import { redirect } from 'next/navigation'

export async function redirectWithSearch(formData: FormData) {
  const search = formData.get('search')?.toString().trim() || ''
  if (search) {
    redirect(`/?search=${encodeURIComponent(search)}`)
  }

  // TODO Try else statement with redirect to home page (no search)
}
