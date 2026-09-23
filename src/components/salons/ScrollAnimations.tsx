'use client'

import { useEffect } from 'react'

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    const root = document.querySelector('.evx-sl-page')
    if (!root) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealEls = Array.from(root.querySelectorAll<HTMLElement>('.evx-sl-reveal'))
    const counters = Array.from(root.querySelectorAll<HTMLElement>('.evx-sl-counter'))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
      counters.forEach((el) => {
        el.textContent = el.dataset.target || el.textContent
      })
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    revealEls.forEach((el) => revealObserver.observe(el))

    const animateCounter = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.target || '0')
      const duration = 1400
      let start: number | null = null
      const step = (timestamp: number) => {
        if (start === null) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = Math.round(eased * target).toString()
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement)
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6 },
    )
    counters.forEach((el) => counterObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [])

  return null
}
