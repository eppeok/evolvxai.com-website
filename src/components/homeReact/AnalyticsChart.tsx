'use client'

import { useEffect, useRef, useState } from 'react'

const weeklyBookings = [
  { day: 'Mon', value: 45, hi: false },
  { day: 'Tue', value: 62, hi: false },
  { day: 'Wed', value: 38, hi: false },
  { day: 'Thu', value: 78, hi: false },
  { day: 'Fri', value: 92, hi: true },
  { day: 'Sat', value: 96, hi: true },
  { day: 'Sun', value: 55, hi: false },
]

const counterTargets = { bookings: 94, revenue: 18400, noshow: 8, reviews: 23 } as const
const counterDurations = { bookings: 1600, revenue: 1800, noshow: 1200, reviews: 1400 } as const

type CounterKey = keyof typeof counterTargets

export const AnalyticsChart: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState<Record<CounterKey, number>>({
    bookings: 0,
    revenue: 0,
    noshow: 0,
    reviews: 0,
  })

  useEffect(() => {
    const el = cardRef.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const frameIds: number[] = []

    ;(Object.keys(counterTargets) as CounterKey[]).forEach((key) => {
      const target = counterTargets[key]
      const duration = counterDurations[key]
      let start: number | null = null

      function step(timestamp: number) {
        if (start === null) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounts((prev) => ({ ...prev, [key]: Math.round(eased * target) }))
        if (progress < 1) frameIds.push(requestAnimationFrame(step))
      }

      frameIds.push(requestAnimationFrame(step))
    })

    return () => frameIds.forEach((id) => cancelAnimationFrame(id))
  }, [visible])

  return (
    <div className="evx-bento-card evx-bento-full evx-reveal" ref={cardRef}>
      <div className="evx-bento-header">
        <div className="evx-bento-icon">&#128202;</div>
        <div>
          <div className="evx-bento-title">Live Analytics Dashboard</div>
          <div className="evx-bento-desc">Revenue, bookings, and retention &mdash; all in one view</div>
        </div>
        <div className="evx-a-pills">
          <div className="evx-a-pill g">+23% Revenue &#8593;</div>
          <div className="evx-a-pill">94% Delivery Rate</div>
          <div className="evx-a-pill">4.9&#9733; Avg Rating</div>
        </div>
      </div>
      <div className="evx-analytics-layout">
        <div>
          <div className="evx-chart-bars">
            {weeklyBookings.map((d, idx) => (
              <div className="evx-bar-col" key={d.day}>
                <div className="evx-bar-track">
                  <div
                    className={`evx-bar${d.hi ? ' hi' : ''}`}
                    style={{
                      height: visible ? `${d.value}%` : '0%',
                      transitionDelay: `${idx * 110}ms`,
                    }}
                  />
                </div>
                <div className="evx-bar-day">{d.day}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="evx-metrics-grid">
          <div className="evx-met">
            <div className="evx-met-n">{counts.bookings}</div>
            <div className="evx-met-l">Bookings this week</div>
          </div>
          <div className="evx-met">
            <div className="evx-met-n">
              AED&nbsp;<span className="accent">{counts.revenue}</span>
            </div>
            <div className="evx-met-l">Revenue this week</div>
          </div>
          <div className="evx-met">
            <div className="evx-met-n">
              {counts.noshow}
              <span className="accent">%</span>
            </div>
            <div className="evx-met-l">No-show rate (&#8595; 60%)</div>
          </div>
          <div className="evx-met">
            <div className="evx-met-n">{counts.reviews}</div>
            <div className="evx-met-l">New 5&#9733; reviews this week</div>
          </div>
        </div>
      </div>
    </div>
  )
}
