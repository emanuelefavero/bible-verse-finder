export function VersesLoaderSkeleton() {
  const placeholderItems = Array.from({ length: 6 })

  return (
    <div className='flex animate-fade-in flex-col gap-10'>
      <div className='flex flex-wrap justify-center gap-6 text-xs font-semibold text-muted-foreground uppercase'>
        <div className='flex items-center gap-2'>
          <span className='h-4 w-[98px] animate-pulse rounded-md bg-muted' />
          <span className='h-4 w-8 animate-pulse rounded-md bg-success' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='h-4 w-[105px] animate-pulse rounded-md bg-muted' />
          <span className='h-4 w-8 animate-pulse rounded-md bg-success' />
        </div>
      </div>

      <div className='flex flex-wrap gap-12'>
        {placeholderItems.map((_, index) => (
          <div key={index} className='flex w-full flex-col gap-3 rounded-lg'>
            <div className='space-y-2 border-l-2 border-border pl-5'>
              <span className='block h-3 w-full animate-pulse rounded bg-foreground/25' />
              <span className='block h-3 w-full animate-pulse rounded bg-foreground/25' />
              <span className='block h-3 w-5/6 animate-pulse rounded bg-foreground/25' />
            </div>
            <div className='flex flex-wrap gap-2'>
              <span className='h-3 w-[78px] animate-pulse rounded bg-muted' />
              <span className='h-3 w-[64px] animate-pulse rounded bg-muted' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
