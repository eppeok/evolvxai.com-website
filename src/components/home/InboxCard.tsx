'use client'

import { cn } from '@/utilities/ui'
import { useLoopedProgress } from './useLoopedProgress'

const rows = [
  { channel: 'WhatsApp', msg: '3 new messages', count: 3, bg: '#25d366' },
  {
    channel: 'Instagram DMs',
    msg: '2 new messages',
    count: 2,
    bg: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)',
  },
  { channel: 'Web Chat', msg: '1 live visitor', count: 1, bg: 'var(--primary)' },
]

export const InboxCard: React.FC = () => {
  const { ref, progress } = useLoopedProgress(rows.length, { stepMs: 1000, holdMs: 1500 })
  const litIndex = progress === 0 ? -1 : progress - 1

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-2">
        {rows.map((row, i) => (
          <div
            key={row.channel}
            className={cn(
              'flex items-center gap-2.5 rounded-lg border px-2.5 py-2 shadow-sm transition-colors duration-300',
              litIndex === i ? 'border-primary/35 bg-evx-lavender' : 'border-border bg-white',
            )}
          >
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs"
              style={{ background: row.bg }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-foreground">{row.channel}</p>
              <p className="truncate text-[11px] text-muted-foreground">{row.msg}</p>
            </div>
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              {row.count}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-border pt-2.5 text-center text-xs font-semibold text-primary">
        🤖 AI handling all 6 conversations simultaneously
      </p>
    </div>
  )
}
