import Link from 'next/link'
import { Eyebrow } from './Eyebrow'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const industries = [
  {
    slug: 'salons',
    icon: '✂️',
    title: 'Salons',
    pain: 'Your stylists are fully booked — and you’re still losing clients to missed WhatsApp messages at 7pm.',
  },
  {
    slug: 'restaurants',
    icon: '🍽️',
    title: 'Restaurants',
    pain: 'Tables sit empty while reservation enquiries wait unread in your DMs until the next morning.',
  },
  {
    slug: 'clinics',
    icon: '🏥',
    title: 'Clinics',
    pain: 'Patients book, cancel without warning, and never hear from you again — until they find another clinic on Google.',
  },
  {
    slug: 'gyms',
    icon: '🏋️',
    title: 'Gyms',
    pain: 'Trial sign-ups come in, nobody follows up within 24 hours, and 60% never convert to paying members.',
  },
  {
    slug: 'barbershops',
    icon: '💈',
    title: 'Barbershops',
    pain: 'Walk-ins are unpredictable. Repeat clients drift. There’s no system bringing them back every 3 weeks.',
  },
  {
    slug: 'med-spas',
    icon: '💆',
    title: 'Med-Spas',
    pain: 'High-value treatments, high-value clients — and zero automated follow-up after their first visit.',
  },
]

export const SolutionsGrid: React.FC = () => {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Solutions By Industry</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            One AI system. Built for your business.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Same gaps. Same system. Industry-specific setup in under 15 minutes.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <RevealItem key={industry.slug}>
              <Link
                href={`/${industry.slug}`}
                prefetch={false}
                className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-evx-lavender text-xl transition-transform duration-300 group-hover:scale-110">
                  {industry.icon}
                </span>
                <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{industry.pain}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
