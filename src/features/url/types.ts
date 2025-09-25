export type UrlParams = 'search' | 'translation'
export type SetUrlParamsOptions = {
  param: UrlParams
  value: string
  history?: boolean
  scroll?: boolean
}
export type DeleteUrlParamsOptions = {
  param: UrlParams
  history?: boolean
  scroll?: boolean
}
