'use client'

import { useEffect } from 'react'

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    const root = document.querySelector('.evx-pr-page')
    if (!root) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealEls = Array.from(root.querySelectorAll<HTMLElement>('.evx-pr-reveal'))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
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

    return () => revealObserver.disconnect()
  }, [])

  return null
}
