import { CountUp } from '@/components/ui/count-up'
import { cn } from '@/lib/utils'
import * as motion from 'motion/react-client'

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
    <div className='mt-1 flex gap-2 text-xs font-semibold text-muted-foreground uppercase'>
      <motion.div
        initial={{ opacity: 0, x: -72 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: 'easeIn', delay: 0.1 }}
      >
        Verses found:{' '}
        <CountUp
          to={versesFound}
          duration={0.5}
          stiffness={versesFoundStiffness}
          className={cn(
            'ml-0.5 inline-block min-w-[4ch] text-left tabular-nums',
            versesFound > 0
              ? 'text-success-foreground'
              : 'text-error-foreground',
          )}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 72 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: 'easeIn', delay: 0.1 }}
      >
        Exact matches:{' '}
        <CountUp
          to={exactMatches}
          duration={0.5}
          stiffness={exactMatchesStiffness}
          className={cn(
            'ml-0.5 inline-block min-w-[4ch] text-left tabular-nums',
            exactMatches > 0
              ? 'text-success-foreground'
              : 'text-error-foreground',
          )}
        />
      </motion.div>
    </div>
  )
}
