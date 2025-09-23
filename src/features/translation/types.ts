export type Translation = {
  short_name: string
  full_name: string
  updated: number
}

export type Language = {
  language: string
  translations: Translation[]
}
