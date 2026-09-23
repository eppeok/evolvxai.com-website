'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

type Message = { from: 'in' | 'out' | 'sys'; text: string; time?: string }

const messages: Message[] = [
  { from: 'in', text: 'Hi, are you free tomorrow at 6pm? 👋', time: '9:03 PM' },
  { from: 'out', text: 'Yes! 6pm is open 🎉 Booked you in. Confirmation sent.', time: '9:03 PM' },
  { from: 'sys', text: '📅 Appointment confirmed · Tomorrow 6:00 PM' },
  { from: 'in', text: 'Perfect, thank you so much!', time: '9:04 PM' },
  { from: 'out', text: '⏰ Reminder sent 24hrs & 2hrs before. See you tomorrow!', time: '9:04 PM' },
  { from: 'sys', text: '⭐ Review request sent automatically after visit' },
]

const TYPING_MS = 800
const GAP_MS = 450
const HOLD_MS = 2600
const RESTART_MS = 500

// Plays the conversation back one bubble at a time, with a brief "typing"
// indicator before each AI reply, then holds on the finished conversation
// for a beat, clears, and loops — rather than dumping all six bubbles on
// screen at once (static, didn't sell the "live assistant" idea) or playing
// once and going blank forever.
export const HeroChat: React.FC = () => {
  const reduceMotion = useReducedMotion()
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? messages.length : 0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (reduceMotion) return

    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    const run = async () => {
      while (!cancelled) {
        for (let i = 0; i < messages.length; i++) {
          if (messages[i].from === 'out') {
            setTyping(true)
            await wait(TYPING_MS, timeouts, () => cancelled)
            if (cancelled) return
            setTyping(false)
          }
          setVisibleCount(i + 1)
          await wait(GAP_MS, timeouts, () => cancelled)
          if (cancelled) return
        }

        await wait(HOLD_MS, timeouts, () => cancelled)
        if (cancelled) return
        setVisibleCount(0)
        await wait(RESTART_MS, timeouts, () => cancelled)
        if (cancelled) return
      }
    }

    run()

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [reduceMotion])

  return (
    <div className="flex min-h-[220px] flex-col gap-2 pt-3 text-sm">
      <AnimatePresence initial={false}>
        {messages.slice(0, visibleCount).map((message, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={
              message.from === 'sys'
                ? 'max-w-full self-center rounded-lg bg-evx-lavender px-3 py-1.5 text-center text-xs font-medium text-primary'
                : message.from === 'out'
                  ? 'max-w-[86%] self-end rounded-xl bg-primary px-3 py-2 text-primary-foreground'
                  : 'max-w-[86%] rounded-xl border border-border bg-white px-3 py-2 text-foreground'
            }
          >
            {message.text}
            {message.time && (
              <div
                className={
                  message.from === 'out'
                    ? 'mt-0.5 text-right text-[10px] text-primary-foreground/70'
                    : 'mt-0.5 text-right text-[10px] text-muted-foreground'
                }
              >
                {message.time}
              </div>
            )}
          </motion.div>
        ))}
        {typing && (
          <motion.div
            key="typing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex max-w-[60px] items-center gap-1 self-end rounded-xl bg-primary px-3 py-2.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="size-1.5 rounded-full bg-primary-foreground"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const wait = (ms: number, timeouts: ReturnType<typeof setTimeout>[], isCancelled: () => boolean) =>
  new Promise<void>((resolve) => {
    const id = setTimeout(() => {
      if (!isCancelled()) resolve()
    }, ms)
    timeouts.push(id)
  })
