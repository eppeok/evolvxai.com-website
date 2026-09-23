import { Eyebrow } from './Eyebrow'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Connect Your Channels',
    description: 'Link WhatsApp Business, Instagram, and your website in a few clicks.',
  },
  {
    number: '02',
    title: 'AI Learns Your Business',
    description: 'We import your services, pricing, and hours. Your AI trains on your setup.',
  },
  {
    number: '03',
    title: 'Clients Start Booking',
    description: 'Your AI responds instantly and sends confirmations across every channel.',
  },
  {
    number: '04',
    title: 'You Watch It Grow',
    description: 'No-shows drop. Reviews roll in. Clients rebook automatically.',
  },
]

export const SetupSteps: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Setup</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Live in under 15 minutes.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            From signup to your first automated booking &mdash; no tech skills needed.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <RevealItem
              key={step.number}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-evx-lavender text-sm font-bold text-primary transition-transform duration-300 hover:scale-110">
                {step.number}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
