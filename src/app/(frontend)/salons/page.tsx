import type { Metadata } from 'next'
import { Poppins, Lato } from 'next/font/google'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/salons/styles.css'
import { Hero } from '@/components/salons/Hero'
import { Stats } from '@/components/salons/Stats'
import { Problems } from '@/components/salons/Problems'
import { Solution } from '@/components/salons/Solution'
import { Pricing } from '@/components/salons/Pricing'
import { Steps } from '@/components/salons/Steps'
import { Showcase } from '@/components/salons/Showcase'
import { Demo } from '@/components/salons/Demo'
import { Testimonials } from '@/components/salons/Testimonials'
import { Capabilities } from '@/components/salons/Capabilities'
import { Industries } from '@/components/salons/Industries'
import { Faq } from '@/components/salons/Faq'
import { Cta } from '@/components/salons/Cta'
import { ScrollAnimations } from '@/components/salons/ScrollAnimations'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--evx-sl-font-heading',
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--evx-sl-font-body',
})

export default function SalonsPage() {
  return (
    <div className={`evx-sl-page ${poppins.variable} ${lato.variable}`}>
      <Hero />
      <Stats />
      <Problems />
      <Solution />
      <Pricing />
      <Steps />
      <Showcase />
      <Demo />
      <Testimonials />
      <Capabilities />
      <Industries />
      <Faq />
      <Cta />
      <ScrollAnimations />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'AI Automation for Salons | EvolvXAI',
  description:
    'Our 24/7 AI receptionist turns WhatsApp, Instagram, and Web Chats into instant bookings for your Dubai salon. No commission. No missed messages. No more chaos.',
  alternates: { canonical: '/salons' },
  openGraph: mergeOpenGraph({
    title: 'AI Automation for Salons | EvolvXAI',
    description:
      'Our 24/7 AI receptionist turns WhatsApp, Instagram, and Web Chats into instant bookings for your Dubai salon. No commission. No missed messages. No more chaos.',
    url: '/salons',
  }),
}
