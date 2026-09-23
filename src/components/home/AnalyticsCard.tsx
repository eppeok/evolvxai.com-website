'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const bars = [
  { day: 'Mon', target: 30 },
  { day: 'Tue', target: 45 },
  { day: 'Wed', target: 35 },
  { day: 'Thu', target: 50 },
  { day: 'Fri', target: 75, hi: true },
  { day: 'Sat', target: 92, hi: true },
  { day: 'Sun', target: 65, hi: true },
]

const stats = [
  { label: 'Bookings this week', value: '94' },
  { label: 'Revenue this week', prefix: 'AED ', value: '18400' },
  { label: 'No-show rate (↓60%)', value: '8%' },
  { label: 'New 5★ reviews this week', value: '23' },
]

const pills = ['+23% Revenue ↑', '94% Delivery Rate', '4.9★ Avg Rating']

export const AnalyticsCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])
  const isInView = useInView(containerRef, { margin: '-60px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || reduceMotion) return

    const controls = bars.map((bar, i) =>
      animate(0, bar.target, {
        duration: 1.2,
        delay: i * 0.06,
        ease: [0.34, 1.2, 0.64, 1],
        repeat: Infinity,
        repeatDelay: 3.2 + (bars.length - 1 - i) * 0.06,
        onUpdate: (v) => {
          const el = barRefs.current[i]
          if (el) el.style.height = `${v}%`
        },
      }),
    )

    return () => controls.forEach((c) => c.stop())
  }, [isInView, reduceMotion])

  return (
    <div ref={containerRef} className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="flex-[1.8]">
        <div className="mb-3 hidden justify-end gap-2 sm:flex">
          {pills.map((pill, i) => (
            <span
              key={pill}
              className={
                i === 0
                  ? 'rounded-full border border-primary/25 bg-evx-lavender px-2.5 py-0.5 text-[11px] font-semibold text-primary'
                  : 'rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground'
              }
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="flex h-[90px] items-end gap-2">
          {bars.map((bar, i) => (
            <div key={bar.day} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-full w-full items-end">
                <div
                  ref={(el) => {
                    barRefs.current[i] = el
                  }}
                  className={
                    bar.hi
                      ? 'w-full rounded-t border border-primary bg-primary/45'
                      : 'w-full rounded-t border border-primary/30 bg-primary/20'
                  }
                  style={{ height: reduceMotion ? `${bar.target}%` : '0%' }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground/70">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-3.5">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-lg font-black leading-tight text-foreground">
              {stat.prefix}
              <span className="text-primary">{stat.value}</span>
            </p>
            <p className="text-[11px] leading-snug text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
