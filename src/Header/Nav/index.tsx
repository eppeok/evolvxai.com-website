'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

const solutions = [
  { label: 'Med-Spa', href: '/med-spa' },
  { label: 'Tattoo Studio', href: '/tattoo-studio' },
]

const more = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
]

export const HeaderNav: React.FC = () => {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      <Link
        href="/restaurants"
        prefetch={false}
        className="text-sm font-medium text-foreground/80 hover:text-foreground"
      >
        Restaurant
      </Link>
      <Link
        href="/salons"
        prefetch={false}
        className="text-sm font-medium text-foreground/80 hover:text-foreground"
      >
        Salons
      </Link>

      <div className="group relative">
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground"
        >
          Solutions
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div className="invisible absolute left-0 top-full z-30 w-48 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
          {solutions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-evx-lavender hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="group relative">
        <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground">
          More
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div className="invisible absolute left-0 top-full z-30 w-40 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
          {more.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-evx-lavender hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <Button asChild size="default" className="rounded-full">
        <Link href="/contact" prefetch={false}>
          Book A Free Demo &rarr;
        </Link>
      </Button>
    </nav>
  )
}
