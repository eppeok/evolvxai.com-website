'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

const links = [
  { label: 'Restaurant', href: '/restaurants' },
  { label: 'Salons', href: '/salons' },
  { label: 'Med-Spa', href: '/med-spa' },
  { label: 'Tattoo Studio', href: '/tattoo-studio' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
]

// The desktop nav (HeaderNav) is hidden below the md breakpoint with no
// replacement — this is the replacement. Without it, mobile visitors had
// no way to reach any page, including the CTA button, which is the single
// most important thing on the site.
export const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-lg text-foreground"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 max-h-[calc(100vh-65px)] overflow-y-auto border-t border-border bg-background px-4 py-4 shadow-lg"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-evx-lavender hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild size="lg" className="mt-4 w-full rounded-full">
              <Link href="/contact" prefetch={false}>
                Book A Free Demo &rarr;
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
