import { translationNames } from '@/features/books/types'
import * as z from 'zod'

const schema = z.enum(translationNames)

export function validate(value: string) {
  return schema.safeParse(value)
}
