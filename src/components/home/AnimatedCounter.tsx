'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'motion/react'

// The DOM always starts with the real, final value — correct for SEO
// crawlers and for visitors with JS disabled or a script that fails to
// load. Only once mounted and scrolled into view does the effect briefly
// rewrite the text node to count up from 0. This is the inverse of the bug
// the site audit found: the live site's counters render "0+" until an
// animation resolves, so a failed script permanently shows zero stats.
export const AnimatedCounter: React.FC<{ value: string; className?: string }> = ({
  value,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(\D*)$/)

  useEffect(() => {
    if (!isInView || !match || !ref.current) return
    const [, prefix, numberStr, suffix] = match
    const target = parseFloat(numberStr.replace(/,/g, ''))
    const decimals = numberStr.includes('.') ? numberStr.split('.')[1].length : 0
    const node = ref.current

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`
      },
      onComplete: () => {
        node.textContent = value
      },
    })

    return () => controls.stop()
  }, [isInView, match, value])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
