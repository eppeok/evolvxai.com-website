import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/homeReact/styles.css'
import { HeroSection } from '@/components/homeReact/HeroSection'
import { StatsSection } from '@/components/homeReact/StatsSection'
import { ProblemSection } from '@/components/homeReact/ProblemSection'
import { IndustriesSection } from '@/components/homeReact/IndustriesSection'
import { SolutionSection } from '@/components/homeReact/SolutionSection'
import { BentoSection } from '@/components/homeReact/BentoSection'
import { StepsSection } from '@/components/homeReact/StepsSection'
import { FinalCtaSection } from '@/components/homeReact/FinalCtaSection'
import { PageScripts } from '@/components/homeReact/PageScripts'

export default function HomePage() {
  return (
    <div className="evx-page">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <IndustriesSection />
      <SolutionSection />
      <BentoSection />
      <StepsSection />
      <FinalCtaSection />
      <PageScripts />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'EvolvXAI | Done-For-You AI Automation for Service Businesses',
  description:
    'EvolvXAI builds done-for-you AI systems that answer enquiries at 2am, book appointments without a receptionist, follow up with every client who walked out, and fill your Google reviews on autopilot.',
  alternates: { canonical: '/' },
  openGraph: mergeOpenGraph({
    title: 'EvolvXAI | Done-For-You AI Automation for Service Businesses',
    description:
      'EvolvXAI builds done-for-you AI systems that answer enquiries at 2am, book appointments without a receptionist, follow up with every client who walked out, and fill your Google reviews on autopilot.',
    url: '/',
  }),
}
