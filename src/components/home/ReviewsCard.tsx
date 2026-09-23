'use client'

import { AnimatedCounter } from './AnimatedCounter'
import { useLoopedProgress } from './useLoopedProgress'
import { cn } from '@/utilities/ui'

const reviews = [
  { name: 'Sarah M.', note: 'Amazing!' },
  { name: 'Ahmed K.', note: 'Will return!' },
]

export const ReviewsCard: React.FC = () => {
  const { ref, progress } = useLoopedProgress(reviews.length, { stepMs: 800, holdMs: 2600 })

  return (
    <div ref={ref}>
      <div className="pb-3 pt-1 text-center">
        <p className="text-4xl font-black tracking-tight text-primary">
          <AnimatedCounter value="4.9" />
        </p>
        <p className="mb-0.5 text-lg tracking-[3px] text-amber-500">★★★★★</p>
        <p className="text-xs text-muted-foreground">Google Rating &mdash; auto-collected</p>
      </div>

      <div className="mt-2 flex flex-col gap-1.5">
        {reviews.map((review, i) => (
          <div
            key={review.name}
            className={cn(
              'flex items-center justify-between rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs shadow-sm transition-all duration-300',
              progress > i ? 'opacity-100' : 'opacity-0',
            )}
          >
            <span className="text-amber-500">★★★★★</span>
            <span className="text-muted-foreground">
              {review.name} &mdash; {review.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
