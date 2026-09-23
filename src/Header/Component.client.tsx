'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { MobileNav } from './Nav/MobileNav'

export const HeaderClient: React.FC = () => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>
        <HeaderNav />
        <MobileNav />
      </div>
    </header>
  )
}
