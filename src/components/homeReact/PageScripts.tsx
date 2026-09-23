'use client'

import { useEffect } from 'react'

export const PageScripts: React.FC = () => {
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []
    const rafs: number[] = []
    const observers: IntersectionObserver[] = []

    const setT = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timeouts.push(id)
      return id
    }
    const setI = (fn: () => void, ms: number) => {
      const id = setInterval(fn, ms)
      intervals.push(id)
      return id
    }
    const raf = (fn: (ts: number) => void) => {
      const id = requestAnimationFrame(fn)
      rafs.push(id)
      return id
    }

    // ---- hero chat sequencer ----
    const msgs = ['em1', 'em2', 'em3', 'em4', 'em5', 'em6']
    const delays = [0, 1300, 900, 700, 800, 900]
    let i = 0
    function showMsg() {
      if (i >= msgs.length) {
        setT(() => {
          msgs.forEach((id) => document.getElementById(id)?.classList.remove('show'))
          i = 0
          setT(showMsg, 1200)
        }, 5000)
        return
      }
      document.getElementById(msgs[i])?.classList.add('show')
      i++
      setT(showMsg, delays[i] || 700)
    }
    setT(showMsg, 800)

    // ---- scroll reveal ----
    const revealEls = document.querySelectorAll('.evx-reveal')
    if ('IntersectionObserver' in window) {
      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible')
              revealObs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.08 },
      )
      observers.push(revealObs)
      revealEls.forEach((el) => revealObs.observe(el))
    } else {
      revealEls.forEach((el) => el.classList.add('visible'))
    }

    // ---- stat counters ----
    function animateCounter(el: Element) {
      const target = parseInt(el.getAttribute('data-target') || '0', 10)
      const duration = 1800
      let start: number | null = null
      function step(ts: number) {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = String(Math.round(e * target))
        if (p < 1) raf(step)
      }
      raf(step)
    }
    const statsSection = document.querySelector('.evx-stats-grid')
    if (statsSection && 'IntersectionObserver' in window) {
      const cntObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.querySelectorAll('.evx-counter').forEach(animateCounter)
              cntObs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.3 },
      )
      observers.push(cntObs)
      cntObs.observe(statsSection)
    }

    // ---- bento animations ----
    function animateReminders() {
      const rows = ['rr1', 'rr2', 'rr3', 'rr4']
      const dots = ['rd1', 'rd2', 'rd3', 'rd4']
      const badges = ['rb1', 'rb2', 'rb3']
      const dl = [600, 1400, 2200, 3000]
      const sd = [1100, 1900, 2700]
      function run() {
        rows.forEach((id) => document.getElementById(id)?.classList.remove('show'))
        dots.forEach((id) => document.getElementById(id)?.classList.remove('lit'))
        badges.forEach((id) => {
          const el = document.getElementById(id)
          if (el) {
            el.textContent = 'Pending'
            el.classList.remove('sent')
          }
        })
        rows.forEach((id, idx) => setT(() => document.getElementById(id)?.classList.add('show'), dl[idx]))
        dots.forEach((id, idx) => setT(() => document.getElementById(id)?.classList.add('lit'), dl[idx] + 300))
        badges.forEach((id, idx) =>
          setT(() => {
            const el = document.getElementById(id)
            if (el) {
              el.textContent = '✓ Sent'
              el.classList.add('sent')
            }
          }, sd[idx]),
        )
        setT(run, 6500)
      }
      run()
    }

    function animateReviews() {
      function run() {
        const numEl = document.getElementById('evxRatingNum')
        const rc1 = document.getElementById('rc1')
        const rc2 = document.getElementById('rc2')
        const star5 = document.getElementById('es5')
        rc1?.classList.remove('show')
        rc2?.classList.remove('show')
        star5?.classList.add('off')
        if (numEl) numEl.textContent = '4.1'
        let val = 4.1
        const iv = setI(() => {
          val = Math.round((val + 0.1) * 10) / 10
          if (numEl) numEl.textContent = val.toFixed(1)
          if (val >= 4.5) star5?.classList.remove('off')
          if (val >= 4.9) clearInterval(iv)
        }, 220)
        setT(() => rc1?.classList.add('show'), 1200)
        setT(() => rc2?.classList.add('show'), 2000)
        setT(run, 6000)
      }
      run()
    }

    function animateInbox() {
      const rows = ['ir0', 'ir1', 'ir2']
      let idx = 0
      function pulse() {
        rows.forEach((id) => document.getElementById(id)?.classList.remove('lit'))
        document.getElementById(rows[idx % rows.length])?.classList.add('lit')
        idx++
        setT(pulse, 1400)
      }
      pulse()
    }

    function animateCampaign() {
      function run() {
        const fillEl = document.getElementById('evxCFill') as HTMLElement | null
        if (fillEl) fillEl.style.width = '0%'
        function cnt(id: string, target: number, dur: number) {
          const el = document.getElementById(id)
          if (!el) return
          el.textContent = '0'
          let s: number | null = null
          function step(ts: number) {
            if (!s) s = ts
            const p = Math.min((ts - s) / dur, 1)
            const e = 1 - Math.pow(1 - p, 3)
            el!.textContent = String(Math.round(e * target))
            if (p < 1) raf(step)
          }
          raf(step)
        }
        setT(() => {
          cnt('evxCSent', 847, 1800)
          if (fillEl) setT(() => (fillEl.style.width = '100%'), 100)
        }, 400)
        setT(() => cnt('evxCOpen', 612, 1400), 900)
        setT(() => cnt('evxCBook', 134, 1000), 1500)
        setT(run, 7000)
      }
      run()
    }

    function animatePipeline() {
      const stages = ['pp0a', 'pp1a', 'pp2a', 'pp3a']
      let idx = 0
      function step() {
        stages.forEach((id) => document.getElementById(id)?.classList.remove('lit'))
        document.getElementById(stages[idx % stages.length])?.classList.add('lit')
        idx++
        if (idx <= stages.length) setT(step, 1200)
        else
          setT(() => {
            idx = 0
            step()
          }, 3000)
      }
      step()
    }

    const bentoSection = document.querySelector('.evx-bento')
    if (bentoSection && 'IntersectionObserver' in window) {
      let bentoFired = false
      const bentoObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !bentoFired) {
              bentoFired = true
              bentoObs.unobserve(e.target)
              animateReminders()
              animateReviews()
              animateInbox()
              animateCampaign()
              animatePipeline()
            }
          })
        },
        { threshold: 0.1 },
      )
      observers.push(bentoObs)
      bentoObs.observe(bentoSection)
    }

    return () => {
      timeouts.forEach(clearTimeout)
      intervals.forEach(clearInterval)
      rafs.forEach((id) => cancelAnimationFrame(id))
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return null
}
