import type { Metadata } from 'next'
import { Poppins, Lato } from 'next/font/google'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/pricing/styles.css'
import { Hero } from '@/components/pricing/Hero'
import { Industries } from '@/components/pricing/Industries'
import { Solution } from '@/components/pricing/Solution'
import { Pricing } from '@/components/pricing/Pricing'
import { Plans } from '@/components/pricing/Plans'
import { Testimonials } from '@/components/pricing/Testimonials'
import { Cta } from '@/components/pricing/Cta'
import { ScrollAnimations } from '@/components/pricing/ScrollAnimations'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--evx-pr-font-heading',
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--evx-pr-font-body',
})

export default function PricingPage() {
  return (
    <div className={`evx-pr-page ${poppins.variable} ${lato.variable}`}>
      <Hero />
      <Industries />
      <Solution />
      <Pricing />
      <Plans />
      <Testimonials />
      <Cta />
      <ScrollAnimations />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Pricing | EvolvXAI',
  description: 'Unlock AI-driven growth with pricing that makes sense. Simple, transparent plans for Dubai salons.',
  alternates: { canonical: '/pricing' },
  openGraph: mergeOpenGraph({
    title: 'Pricing | EvolvXAI',
    description: 'Unlock AI-driven growth with pricing that makes sense. Simple, transparent plans for Dubai salons.',
    url: '/pricing',
  }),
}
