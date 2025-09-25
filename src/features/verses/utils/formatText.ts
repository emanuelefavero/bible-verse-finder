export function removeSTags(text: string): string {
  return text.replace(/<S>\d+<\/S>/g, '') // Remove <S> tags from text
}

// TIP: The KJV translation includes a lot of <S> tags that we want to remove
export function cleanKJVText(text: string, translation: string): string {
  return translation === 'KJV' ? removeSTags(text) : text
}
