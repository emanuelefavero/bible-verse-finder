import { CountUp } from '@/components/ui/count-up'
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
        <CountUp
          to={versesFound}
          duration={0.5}
          stiffness={300}
          className={cn(
            versesFound > 0
              ? 'text-success-foreground'
              : 'text-error-foreground',
          )}
        />
      </div>
      <div>
        Exact matches:{' '}
        <CountUp
          to={exactMatches}
          duration={0.5}
          stiffness={200}
          className={cn(
            exactMatches > 0
              ? 'text-success-foreground'
              : 'text-error-foreground',
          )}
        />
      </div>
    </div>
  )
}
