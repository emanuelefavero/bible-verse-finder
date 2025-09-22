import { CountUp } from '@/components/ui/count-up'
import { cn } from '@/lib/utils'

type Props = {
  exactMatches: number
  versesFound: number
}

export function VersesStats({ exactMatches, versesFound }: Props) {
  // Assign a slower animation (smaller stiffness) to the bigger value
  const higherStiffness = 300
  const lowerStiffness = 200
  const biggerValue = Math.max(exactMatches, versesFound)
  const versesFoundStiffness =
    versesFound === biggerValue ? lowerStiffness : higherStiffness
  const exactMatchesStiffness =
    exactMatches === biggerValue ? lowerStiffness : higherStiffness

  return (
    <div className='mt-1 flex gap-4 text-xs font-semibold text-muted-foreground uppercase'>
      <div>
        Verses found:{' '}
        <CountUp
          to={versesFound}
          duration={0.5}
          stiffness={versesFoundStiffness}
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
          stiffness={exactMatchesStiffness}
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
