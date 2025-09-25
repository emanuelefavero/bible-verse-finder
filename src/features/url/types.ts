export type UrlParams = 'search' | 'translation'
export type SetUrlParamsOptions = {
  param: UrlParams
  value: string
  history?: boolean
  scroll?: boolean
  route?: string
}
export type DeleteUrlParamsOptions = {
  param: UrlParams
  history?: boolean
  scroll?: boolean
  route?: string
}
