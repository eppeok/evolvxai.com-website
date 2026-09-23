'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const targets = { sent: 847, opened: 612, booked: 134 }
const BAR_TARGET_PERCENT = 65

export const CampaignsCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sentRef = useRef<HTMLParagraphElement>(null)
  const openedRef = useRef<HTMLParagraphElement>(null)
  const bookedRef = useRef<HTMLParagraphElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: '-60px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || reduceMotion) return

    const controls = [
      animate(0, targets.sent, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatDelay: 2.4,
        onUpdate: (v) => {
          if (sentRef.current) sentRef.current.textContent = Math.round(v).toString()
        },
      }),
      animate(0, targets.opened, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatDelay: 2.4,
        onUpdate: (v) => {
          if (openedRef.current) openedRef.current.textContent = Math.round(v).toString()
        },
      }),
      animate(0, targets.booked, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatDelay: 2.4,
        onUpdate: (v) => {
          if (bookedRef.current) bookedRef.current.textContent = Math.round(v).toString()
        },
      }),
      animate(0, BAR_TARGET_PERCENT, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatDelay: 2.4,
        onUpdate: (v) => {
          if (barRef.current) barRef.current.style.width = `${v}%`
        },
      }),
    ]

    return () => controls.forEach((c) => c.stop())
  }, [isInView, reduceMotion])

  return (
    <div ref={containerRef}>
      <div className="rounded-lg bg-evx-lavender px-3 py-2 text-xs font-medium text-primary">
        🎉 Eid Special &mdash; 20% Off This Week
      </div>
      <div className="mt-3 flex justify-around text-center">
        <div>
          <p ref={sentRef} className="text-xl font-black text-primary">
            {reduceMotion ? targets.sent : 0}
          </p>
          <p className="text-[11px] text-muted-foreground">Sent</p>
        </div>
        <div>
          <p ref={openedRef} className="text-xl font-black text-primary">
            {reduceMotion ? targets.opened : 0}
          </p>
          <p className="text-[11px] text-muted-foreground">Opened</p>
        </div>
        <div>
          <p ref={bookedRef} className="text-xl font-black text-primary">
            {reduceMotion ? targets.booked : 0}
          </p>
          <p className="text-[11px] text-muted-foreground">Booked</p>
        </div>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-border">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-primary to-[#7c3aed]"
          style={{ width: reduceMotion ? `${BAR_TARGET_PERCENT}%` : '0%' }}
        />
      </div>
    </div>
  )
}
