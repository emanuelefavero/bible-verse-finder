import * as z from 'zod'

const schema = z.string().trim().min(3).max(200)

export function validate(input: string) {
  return schema.safeParse(input)
}
