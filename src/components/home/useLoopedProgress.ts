'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

// Shared driver for every "play N steps, hold on the finished state, clear,
// repeat" card animation on the homepage (reminders, review chips, inbox
// highlight, pipeline highlight). One function, reused everywhere, instead
// of each card hand-rolling its own timer loop.
export const useLoopedProgress = (
  steps: number,
  opts?: { stepMs?: number; holdMs?: number; restartMs?: number },
) => {
  const stepMs = opts?.stepMs ?? 700
  const holdMs = opts?.holdMs ?? 2600
  const restartMs = opts?.restartMs ?? 500

  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: '-60px' })
  const [progress, setProgress] = useState(reduceMotion ? steps : 0)

  useEffect(() => {
    if (reduceMotion || !isInView) return

    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(() => {
          if (!cancelled) resolve()
        }, ms)
        timeouts.push(id)
      })

    const run = async () => {
      while (!cancelled) {
        for (let i = 1; i <= steps; i++) {
          setProgress(i)
          await wait(stepMs)
          if (cancelled) return
        }
        await wait(holdMs)
        if (cancelled) return
        setProgress(0)
        await wait(restartMs)
        if (cancelled) return
      }
    }

    run()

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [isInView, reduceMotion, steps, stepMs, holdMs, restartMs])

  return { ref, progress }
}
