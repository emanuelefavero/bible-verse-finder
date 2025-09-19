type Props = {
  exactMatches: number
  versesFound: number
}

export function VersesStats({ exactMatches, versesFound }: Props) {
  return (
    <div className='mb-4 flex gap-4 text-sm text-muted-foreground uppercase'>
      <span>Exact matches: {exactMatches}</span>
      <span>Verses found: {versesFound}</span>
    </div>
  )
}
