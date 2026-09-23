import type { Metadata } from 'next'
import { Poppins, Lato } from 'next/font/google'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/faq/styles.css'
import { Hero } from '@/components/faq/Hero'
import { FaqAccordion } from '@/components/faq/FaqAccordion'
import { Testimonials } from '@/components/faq/Testimonials'
import { Cta } from '@/components/faq/Cta'
import { ScrollAnimations } from '@/components/faq/ScrollAnimations'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--evx-fq-font-heading',
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--evx-fq-font-body',
})

export default function FaqPage() {
  return (
    <div className={`evx-fq-page ${poppins.variable} ${lato.variable}`}>
      <Hero />
      <FaqAccordion />
      <Testimonials />
      <Cta />
      <ScrollAnimations />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'EvolvXAI FAQ | AI Automation Questions & Answers for Businesses',
  description:
    'Get quick answers to all EvolvXAI questions including features, setup, automation, pricing, reviews, & customer engagement tools.',
  alternates: { canonical: '/faq' },
  openGraph: mergeOpenGraph({
    title: 'EvolvXAI FAQ | AI Automation Questions & Answers for Businesses',
    description:
      'Get quick answers to all EvolvXAI questions including features, setup, automation, pricing, reviews, & customer engagement tools.',
    url: '/faq',
  }),
}
