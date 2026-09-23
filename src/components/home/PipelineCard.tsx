'use client'

import { cn } from '@/utilities/ui'
import { useLoopedProgress } from './useLoopedProgress'

type PipelineCardData = { name: string; detail: string; done?: boolean }

const columns: { stage: string; headerCheck?: boolean; cards: PipelineCardData[] }[] = [
  {
    stage: 'Enquiry',
    cards: [
      { name: 'Fatima A.', detail: 'Hair + Color' },
      { name: 'James K.', detail: 'Deep Clean' },
    ],
  },
  { stage: 'Contacted', cards: [{ name: 'Aisha R.', detail: 'Facial' }] },
  { stage: 'Booked', cards: [{ name: 'Mohamed S.', detail: 'Full Package' }] },
  {
    stage: 'Client',
    headerCheck: true,
    cards: [{ name: 'Layla T.', detail: 'Returning', done: true }],
  },
]

export const PipelineCard: React.FC = () => {
  const { ref, progress } = useLoopedProgress(columns.length, { stepMs: 900, holdMs: 1800 })
  const litIndex = progress === 0 ? -1 : progress - 1

  return (
    <div ref={ref} className="grid grid-cols-4 gap-1.5">
      {columns.map((col, i) => (
        <div key={col.stage}>
          <p className="mb-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
            {col.stage}
            {col.headerCheck && <span className="text-primary">✓</span>}
          </p>
          <div className="flex flex-col gap-1">
            {col.cards.map((card) => (
              <div
                key={card.name}
                className={cn(
                  'rounded-md border px-1.5 py-1 shadow-sm transition-colors duration-300',
                  litIndex === i
                    ? 'border-primary/35 bg-evx-lavender'
                    : card.done
                      ? 'border-[#7c3aed]/25 bg-[#7c3aed]/5'
                      : 'border-border bg-white',
                )}
              >
                <p className="truncate text-[11px] font-semibold text-foreground">{card.name}</p>
                <p
                  className={cn(
                    'truncate text-[10px]',
                    card.done ? 'text-[#7c3aed]' : 'text-muted-foreground',
                  )}
                >
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
