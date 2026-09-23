'use client'

import { cn } from '@/utilities/ui'
import { useLoopedProgress } from './useLoopedProgress'

const steps = [
  { label: '24 hrs before', quote: 'See you tomorrow at 6pm! Reply YES to confirm.' },
  { label: '2 hrs before', quote: "You're up at 6pm today. See you soon!" },
  { label: '30 min before', quote: "Almost time — we're ready for you!" },
]

export const RemindersCard: React.FC = () => {
  const { ref, progress } = useLoopedProgress(steps.length, { stepMs: 900, holdMs: 2600 })

  return (
    <div ref={ref}>
      <Row label="Booking confirmed" badge="✓ Done" lit />
      {steps.map((step, i) => {
        const sent = progress > i
        return (
          <Row
            key={step.label}
            label={
              <>
                {step.label} &mdash; <em className="not-italic text-foreground">&ldquo;{step.quote}&rdquo;</em>
              </>
            }
            badge={sent ? 'Sent ✓' : 'Pending'}
            lit={sent}
          />
        )
      })}
      {progress >= steps.length && (
        <div className="flex items-center gap-2 pt-2.5 text-xs font-semibold text-primary">
          ✅ Client confirmed &mdash; no-show prevented
        </div>
      )}
    </div>
  )
}

const Row: React.FC<{ label: React.ReactNode; badge: string; lit: boolean }> = ({
  label,
  badge,
  lit,
}) => (
  <div className="flex items-start gap-2.5 border-b border-border py-2.5 last:border-b-0">
    <span
      className={cn(
        'mt-1 size-2.5 shrink-0 rounded-full border-2 transition-colors duration-300',
        lit ? 'border-primary bg-primary' : 'border-muted-foreground/30',
      )}
    />
    <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
      <span className="text-xs leading-snug text-muted-foreground">{label}</span>
      <span
        className={cn(
          'shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-bold whitespace-nowrap transition-colors duration-300',
          lit
            ? 'border-primary/30 bg-evx-lavender text-primary'
            : 'border-border bg-muted text-muted-foreground',
        )}
      >
        {badge}
      </span>
    </div>
  </div>
)
