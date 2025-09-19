import { cn } from '@/lib/utils'

type Props = {
  exactMatches: number
  versesFound: number
}

export function VersesStats({ exactMatches, versesFound }: Props) {
  return (
    <div className='mt-1 flex gap-4 text-xs font-semibold text-muted-foreground uppercase'>
      <div>
        Verses found:{' '}
        <span
          className={cn(
            versesFound > 0
              ? 'text-success-foreground'
              : 'text-error-foreground',
          )}
        >
          {versesFound}
        </span>
      </div>
      <div>
        Exact matches:{' '}
        <span
          className={cn(
            exactMatches > 0
              ? 'text-success-foreground'
              : 'text-error-foreground',
          )}
        >
          {exactMatches}
        </span>
      </div>
    </div>
  )
}
