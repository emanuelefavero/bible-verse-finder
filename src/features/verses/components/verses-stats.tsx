type Props = {
  exactMatches: number
  versesFound: number
}

export function VersesStats({ exactMatches, versesFound }: Props) {
  return (
    <div className='mt-1 flex gap-4 text-xs font-semibold text-muted-foreground uppercase'>
      <div>Exact matches: {exactMatches}</div>
      <div>Verses found: {versesFound}</div>
    </div>
  )
}
