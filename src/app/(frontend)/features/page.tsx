import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/featureNew/styles.css'
import { Hero } from '@/components/featureNew/Hero'
import { Capabilities } from '@/components/featureNew/Capabilities'
import { Industries } from '@/components/featureNew/Industries'
import { Showcase } from '@/components/featureNew/Showcase'
import { Cta } from '@/components/featureNew/Cta'

export default function FeaturesPage() {
  return (
    <div className="evx-fn-page">
      <Hero />
      <Capabilities />
      <Industries />
      <Showcase />
      <Cta />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'EvolvXAI Features | All-in-One AI Automation & CRM Tools',
  description:
    'Explore all EvolvXAI features—AI chatbot, CRM, workflows, automation, reviews, scheduling, marketing tools, and more to grow your business effortlessly.',
  alternates: { canonical: '/features' },
  openGraph: mergeOpenGraph({
    title: 'EvolvXAI Features | All-in-One AI Automation & CRM Tools',
    description:
      'Explore all EvolvXAI features—AI chatbot, CRM, workflows, automation, reviews, scheduling, marketing tools, and more to grow your business effortlessly.',
    url: '/features',
  }),
}
